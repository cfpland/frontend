import React from 'react'
import './style.scss'
import { statuses } from 'utilities/statuses'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

class ProfileLocationInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchableName: '',
      searchResults: [],
      searchStatus: statuses.READY,
      showOptions: false,
      profileLocation: {
        locationName: '',
        locationPoint: '',
      },
    }

    this.getDebouncedLocations = AwesomeDebouncePromise(
      props.apiClient.getLocations,
      400
    )
  }

  handleSearchableNameChange = event => {
    this.setState({
      ...this.state,
      searchResults: [],
      searchStatus:
        event.target.value && event.target.value.length >= 3
          ? statuses.LOADING
          : statuses.READY,
      searchableName: event.target.value,
    })

    if (event.target.value) {
      this.getDebouncedLocations(event.target.value).then(res => {
        this.setState({
          ...this.state,
          searchResults: res.data.items,
          searchStatus: res.data.total > 0 ? statuses.SAVING : statuses.ERROR,
        })
      })
    }
  }

  selectLocation = profileLocation => {
    this.props.updateLocation({
      ...profileLocation,
      locationName: profileLocation.friendlyName,
      locationPoint: profileLocation.latitude + ',' + profileLocation.longitude,
    })
  }

  handleOnFocus = event => {
    this.setState({
      ...this.state,
      showOptions: true,
    })
  }

  handleOnBlur = event => {
    setTimeout(() => {
      // Ensures that the blur event is processed after the selectLocation handler
      if (this.state.showOptions) {
        this.props.updateLocation({
          locationName: this.state.searchableName,
          locationPoint: null,
        })
      }
    }, 50)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      this.setState({
        ...this.state,
        searchableName: nextProps.locationName,
        searchStatus: statuses.READY,
        searchResults: [],
        showOptions: false,
        profileLocation: {
          locationName: nextProps.locationName,
          locationPoint: nextProps.locationPoint,
        },
      })
    }
  }

  getIconFromSearchStatus = () => {
    if (this.state.searchStatus === statuses.LOADING) {
      return 'fa fa-hourglass'
    } else if (this.state.searchStatus === statuses.SAVING) {
      return 'fa fa-list'
    } else {
      return 'fa fa-search'
    }
  }

  render = () => (
    <div className="col-12">
      <label htmlFor="locationName">Location</label>
      <div className="input-group mb-3">
        <input
          name="locationName"
          type="text"
          className="form-control"
          id="locationName"
          placeholder="Start typing to select your city"
          autoComplete="off"
          value={this.state.searchableName}
          onChange={this.handleSearchableNameChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className={this.getIconFromSearchStatus()} />
          </span>
        </div>
      </div>
      {this.state.showOptions &&
      this.state.searchResults &&
      this.state.searchResults.length > 0 ? (
        <div className="dropdown-menu show location-dropdown-select">
          {this.state.searchResults.map(result => (
            <button
              key={result.friendlyName}
              className="dropdown-item"
              type="button"
              onClick={() => this.selectLocation(result)}
              value={result}
            >
              {result.friendlyName}
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
