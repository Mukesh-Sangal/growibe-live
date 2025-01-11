import axios from 'axios'

async function getPageData(apiPageUrl) {
  const result = await axios.get(apiPageUrl)
  const backendUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

  // API Map
  const apiMap = {
    Banner: `${backendUrl}/innerbanner/`,
    'Box Container': `${backendUrl}/what-we-do/`,
    'Title With Desc Main': `${backendUrl}/title-with-desc/`,
    Improve: `${backendUrl}/improving/`,
    'Lets Build head subhead img': `${backendUrl}/lets-build/`,
    'Home Portfolio': `${backendUrl}/home-page-section-1/`,
    'Home Page Banner': `${backendUrl}/home-banner/`,
    'Drupal  Power  House  Customizations': `${backendUrl}/home-page-section-2/`,
    'Home Page We Help Agencies': `${backendUrl}/help-agencies-section-4/`,
    'Title Heading With Cta': `${backendUrl}/cta-section/`,
    'Home Cta Services': `${backendUrl}/home-services/`,
    'Cta Heading Link Image': `${backendUrl}/cta-with-image/`,
    faq: `${backendUrl}/faq-questions-ans/`,
    'About us First Section': `${backendUrl}/about-first/`,
    'Our Mission': `${backendUrl}/our-mission/`,
    'About Digital Experiences': `${backendUrl}/about-digital-experiences/`,
    'Slider Component': `${backendUrl}/slider/`,
    'Our Team': `${backendUrl}/our-team/`,
    'About lando today': `${backendUrl}/about-start-with-lando/`,
    'Technologies We Serve': `${backendUrl}/tech-we-serve/`,
    'Services Banner': `${backendUrl}/services-banner/`,
    'Services Counter Main': `${backendUrl}/services-counter/`,
    'Services Digital Asset Management': `${backendUrl}/content-management/`,
    'Management Paragraph': `${backendUrl}/brand-text-block/`,
    'Brand Management at Scale': `${backendUrl}/brand-management/`,
    'Global Cta': `${backendUrl}/global-cta/`,
    'Office Location': `${backendUrl}/office-locations/`,
    BlogItems: `${backendUrl}/blogs/`,
    'Our Clients': `${backendUrl}/our-clients/`,
  }

  let { data } = result
  const fetchPromises = data.map(async (item) => {
    const apiUrl = `${apiMap[item.type]}${item.id}`
    try {
      const response = await axios
        .get(apiUrl)
      return response.data
    } catch (error) {
      console.error(
        `Error fetching data for type: ${item.type}, ID: ${item.id}`
      )
      return null // Return null in case of an error to continue
        
    }
  })

  const results = await Promise.all(fetchPromises)
  return results.filter(Boolean) // Filter out null values (errors)
}

export default getPageData
