import React from 'react'
import './style.scss'

class ProfileLocationInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchableName: '',
      searchResults: [],
      showOptions: false,
      profileLocation: {
        locationName: '',
        locationPoint: '',
      },
    }
  }

  handleSearchableNameChange = event => {
    this.setState({
      ...this.state,
      searchableName: event.target.value,
      searchResults: [
        {
          locationName: 'location 1',
          latitude: '-19.16863',
          longitude: '-28.60786',
        },
        {
          locationName: 'location 2',
          latitude: '-19.16863',
          longitude: '-28.60786',
        },
        {
          locationName: 'location 3',
          latitude: '-19.16863',
          longitude: '-28.60786',
        },
      ],
    })
  }

  selectLocation = profileLocation => {
    console.log(profileLocation)
    this.props.updateLocation({
      ...profileLocation,
      locationPoint: profileLocation.latitude + ',' + profileLocation.longitude,
    })
  }

  handleOnFocus = event => {
    this.setState({
      ...this.state,
      showOptions: true,
    })
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      this.setState({
        ...this.state,
        searchableName: nextProps.locationName,
        showOptions: false,
        profileLocation: {
          locationName: nextProps.locationName,
          locationPoint: nextProps.locationPoint,
        },
      })
    }
  }

  render = () => (
    <div className="col-12">
      <label htmlFor="locationName">Location</label>
      <input
        name="locationName"
        type="text"
        className="form-control mb-3"
        id="locationName"
        placeholder="City, Country"
        autoComplete="off"
        value={this.state.searchableName}
        onChange={this.handleSearchableNameChange}
        onFocus={this.handleOnFocus}
      />
      {this.state.showOptions &&
      this.state.searchResults &&
      this.state.searchResults.length > 0 ? (
        <div className="dropdown-menu show location-dropdown-select">
          {this.state.searchResults.map(result => (
            <button
              key={result.locationName}
              className="dropdown-item"
              type="button"
              onClick={() => this.selectLocation(result)}
            >
              {result.locationName}
            </button>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProfileLocationInput
