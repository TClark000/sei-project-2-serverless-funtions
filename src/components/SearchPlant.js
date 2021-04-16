import React from 'react'

const SearchPlant = (props) => {

  return (
    <div className="SearchForm">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input 
            className="input is-rounded" 
            type="search" 
            placeholder="Search filter..."
            value={props.searchQuery}
            onChange={props.filterPlants}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchPlant