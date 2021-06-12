import React from 'react'
import Navbar from './Navbar'
import { withRouter } from 'react-router-dom'

const Header = () => {
  return (
    <section className="hero is-primary with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Plants
          </h1>
          <h2 className="subtitle">
            Some are edible, search for your favourites!
          </h2>
          <h2 className="subtitle has-text-black has-background-grey-light">
            The Trefle API is no longer available online, May 2021:
            <a href="https://twitter.com/trefle_api?lang=en"> trefle_api</a>
          </h2>
        </div>
      </div>
      <Navbar />
    </section>
  )
}

export default withRouter(Header)