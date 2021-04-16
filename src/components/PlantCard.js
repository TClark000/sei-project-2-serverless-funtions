import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = (props) => {
  const { common_name, image_url, slug, scientific_name } = props

  return (
    <div className="column is-one-quarter">
      <Link to={`/${slug}`} >
        <div className="card">
          {!image_url && <div>Sorry, no image available.</div>}
          {image_url && <div className="card-image">
            <figure className="image is-4by3">
              <img src={image_url} alt="plant" />
            </figure>
          </div>}
          <div className="card-content">
            {common_name ? <div className="is-capitalized">{common_name}</div> : <div className="is-italic">{scientific_name}</div>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PlantCard