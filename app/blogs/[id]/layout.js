import { Outfit } from '@next/font/google'
import Head from 'next/head'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal'],
})

export async function generateMetadata({ params }) {
  const cacheBuster = Math.random()
  const { id } = params // Extract the dynamic route parameter
  const apiUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${id}?_format=json&cache=${cacheBuster}`

  try {
    // Fetch data with the cache-busting parameter
    const response = await fetch(apiUrl)

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`)
    }
    const product = await response.json()
    // Extract metadata from field_meta_tags  
    const metaTagString = product.field_meta_tags?.[0]?.value
    if (metaTagString) {
      // Parse the metadata JSON string
      const meta = JSON.parse(metaTagString)
      // Return the metadata with fallbacks
      return {
        title: meta.title || 'Default Title',
        description: meta.description || 'Default Description',
        keywords: meta.keywords || 'Default Keywords', // If available in your data
        // Add more meta fields as needed
      }
    } else {
      console.warn('field_meta_tags is missing or empty.')
      return {
        title: 'Error Title',
        description: 'Error Description',
        keywords: 'Default Keywords',
      }
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return {
      title: 'Default Title',
      description: 'Default Description',
      keywords: 'Default Keywords',
    }
  }
}


export default function BlogLayout({ children }) {
  return (
    <> 
      <main className={outfit.className}>{children}</main>
    </>
  )
}
