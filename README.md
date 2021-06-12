# Reactathon | sei50-project II with Netlify Serverless Functions
> Consume a RestAPI with React and Axios.  This is based on an earlier project - GA LDN project II https://bit.ly/sei50-p2

The goal here was to remove the CORS challenge required in the original app.  Challenge details here: https://github.com/Rob--W/cors-anywhere/issues/301 

In this project Netlify serverless functions utilise node-fetch to request the trefle api and a Cross-Origin Resource Sharing (CORS)  header is not required.

<span style="color: red;">The Trefle API is no longer available online, May 2021: [trefle_api](https://twitter.com/trefle_api?lang=en)</span>

## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Status](#status)

## General Info
Trefle is a global botanical API, https://trefle.io  
It is an open sourced dataset with over 1 million plants.  To narrow the focus for the **Reactathon**  the filter was set to **edible plants**.

## Technologies

Front End:
- React
- JavaScript
- Axios
- SCSS
- Bulma
- react-responsive-carousel
- React router dom

Back End:
- node-fetch
- Netlify serverless functions

Dev Tools:
- Netlify
- Git 
- Github
- VSCode
- Insomnia
- Eslint
- Google Chrome dev tools

## Setup

Deployed with netlify the React API webapp is hosted here:
https://sei50p2-serverlessfunctions-97906e.netlify.app/

`yarn start` run the development server

`yarn build` create a build directory

`netlify deploy --build` deploy with netlify

## Code Examples

A front end axios request to the Netlify serverless function, event handler.  Page number passed as a parameter.
```js
export const getPlantsEdible = (pageNum) => {
  return axios.get('https://sei50p2-serverlessfunctions-97906e.netlify.app/.netlify/functions/apiGetPlantsEdible', { params: { pageNum: pageNum } })
}
```

Back end fetch to request the trefle api.

```js
  const token =  process.env.REACT_APP_MY_API_KEY
  const baseUrl = 'https://trefle.io/api/v1/'
  ...
  const pageNum = event.queryStringParameters.pageNum
  ...
    const response = await fetch(`${baseUrl}/species?filter[edible]=true&page=${pageNum}`, { 
      method: 'GET', 
      headers: { 
        Accept: '*/*', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
```

Netlify serverless function package.json

```js
{
  "name": "apiGetPlantsEdible",
  "description": "Netlify Dev + Serverless Functions + trefle api",
  "main": "apiGetPlantsEdible.js",
  ...
  "dependencies": {
    "node-fetch": "^2.6.1"
  }
}
```

netlify.toml file
```js
[build]
  publish = "build"
  command = "yarn build"
  functions = 'functions'
```

## Status
Project is: _finished_