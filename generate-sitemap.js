const sitemap = require('nextjs-sitemap-generator')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })
const NEXT_BASE_URL = process.env.NEXT_BASE_URL

try {
  let pagesDirectory
  if (process.env.NODE_ENV === 'production') {
    // For production builds
    pagesDirectory = path.join(process.cwd(), '.next/server/app')
  } else {
    // For development builds
    pagesDirectory = path.join(process.cwd(), '.next/server/app')
  }

  const targetDirectory = 'public/'

  if (fs.existsSync(pagesDirectory)) {
    // Generate sitemap.xml
    sitemap({
      baseUrl: NEXT_BASE_URL,
      pagesDirectory,
      targetDirectory,
      ignoredExtensions: ['js', 'map'],
      ignoredPaths: [
        'assets',
        '404',
        'nft',
        '500',
        'index',
        'favicon.ico',
      ],
    })

    // Generate robots.txt
    let robotsContent = `User-agent: *\nDisallow: /404\nDisallow: /nft\nDisallow: /serviceId\nDisallow: /500\nDisallow: /index\nDisallow: /favicon.ico\n`

    // Add ignored extensions to robots.txt
    robotsContent += `Disallow: /*.js\nDisallow: /*.map\n`

    // Add ignored paths to robots.txt
    robotsContent += `Disallow: /assets/\n`
    // Add sitemap directive to robots.txt
    robotsContent += `Sitemap: https://wvibes-tx65.vercel.app/sitemap.xml\n`

    fs.writeFileSync(path.join(targetDirectory, 'robots.txt'), robotsContent)
  } else {
    console.error(`Directory not found: ${pagesDirectory}`)
  }
} catch (error) {
  console.error('Error:', error)
}
