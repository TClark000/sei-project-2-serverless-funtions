import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import PlantDetail from './components/PlantDetail'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:slug" component={PlantDetail} />
      </Switch>
    </BrowserRouter>
  )
}