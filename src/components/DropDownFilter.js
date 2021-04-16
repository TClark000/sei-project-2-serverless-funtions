import React from  'react'

const DropDownFilter = ({ handleSelectRegion }) => {

  return (
    <div className="field">
      <div className="control">
        <div className="select">
          <div className="select is-primary is-rounded is-hovered">
            <select onChange={handleSelectRegion}>
              <option value="all">Select Region</option>
              <option value="1">Europe</option>
              <option value="2">Africa</option>
              <option value="3">Asia Temperate</option>
              <option value="4">Asia Tropical</option>
              <option value="5">Australasia</option>
              <option value="6">Pacific</option>
              <option value="7">Northern America</option>
              <option value="8">Southern America</option>
              <option value="9">Antarctic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDownFilter