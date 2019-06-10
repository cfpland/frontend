import React from 'react'
import './style.scss'

class LocationIntput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null,
      country: null,
      suggestions: [],
    }
  }

  render = () => {
    return (
      <div className="col-12">
        <label htmlFor="location">Location</label>
        <input
          name="location"
          type="text"
          className="form-control mb-3"
          id="location"
          placeholder="City, Country"
          value={this.state.location || ''}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default LocationIntput
