import axios from 'axios'

export const getPlantsEdible = (pageNum) => {
  return axios.get('https://sei50p2-serverlessfunctions-97906e.netlify.app/.netlify/functions/apiGetPlantsEdible', { params: { pageNum: pageNum } })
}

export const getPlantsEdibleQueryTwo = (queryText) => {
  // console.log(`${baseUrl}/plants/?&filter[common_name]=${queryText}`)
  return axios.get('https://sei50p2-serverlessfunctions-97906e.netlify.app/.netlify/functions/apiGetPlantsQueryEdible', { params: { queryText: queryText } })
}

export const getSinglePlant = (slug) => {
  return axios.get('https://sei50p2-serverlessfunctions-97906e.netlify.app/.netlify/functions/apiGetSinglePlant', { params: { slug: slug } } )
}