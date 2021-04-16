const fetch = require('node-fetch') 
console.log('Hello World')

exports.handler = async (event, context) => { 
  const token =  process.env.REACT_APP_MY_API_KEY
  const baseUrl = 'https://trefle.io/api/v1/'

  if (event.httpMethod !== 'GET') {
    console.log('Method Not Allowed')
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const errorGen = msg => {
    console.log('500 error, apiGetSinglePlant.js')
    return { statusCode: 500, body: msg } 
  } 

  try {

    const slug  = event.queryStringParameters.slug
    if (!slug) { 
      return errorGen('Missing Slug')
    }
    // console.log(slug)
    const response = await fetch(`${baseUrl}/plants/${slug}`, { 
      method: 'GET', 
      headers: { 
        Accept: '*/*', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()
    // console.log(data)
    if (response.statusText !== 'OK') { 
      return { statusCode: response.statusText, body: data } 
    }
    return {
      statusCode: 200, 
      body: JSON.stringify({ msg: 'You\'ve done it!', data: data }) 
    }
  } catch (err) { 
    console.log(err)
    return { 
      statusCode: 500, 
      body: JSON.stringify({ msg: err.message })
    }
  } 
}