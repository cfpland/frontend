import React from 'react'
import './style.scss'
import ApiClient from '../../../utilities/api-client'
import TrackModal from '../../TrackModal'

const getTrackLinkClass = data => {
  if (data.isTracked) {
    if (data.trackingStatus === 'applied') {
      return 'track-link nav-item nav-link border-right text-info'
    } else if (data.trackingStatus === 'accepted') {
      return 'track-link nav-item nav-link border-right text-success'
    } else if (data.trackingStatus === 'rejected') {
      return 'track-link nav-item nav-link border-right text-danger'
    }
  }
  return 'track-link nav-item nav-link border-right'
}

class TrackButton extends React.Component {
  constructor(props) {
    super(props)
    this.apiClient = new ApiClient()
    this.state = {
      data: null,
      status: 'ready',
    }
  }

  render = () => {
    const isAuthenticated = this.props.isAuthenticated
    const data = this.state.data || this.props.data
    const modalId = `modal_${data.providerId}`

    return (
      <React.Fragment>
        {isAuthenticated ? (
          <a
            href="#"
            data-toggle="modal"
            data-target={`#${modalId}`}
            title="Track"
            className={getTrackLinkClass(data)}
          >
            <div>
              <i className="fa fa-compass" />
            </div>
            {data.isTracked ? data.trackingStatus : 'Track'}
          </a>
        ) : (
          <a
            className="nav-item nav-link border-right"
            href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
            target="_blank"
          >
            <div>
              <i className="fa fa-paper-plane-o" />
            </div>
            Track
          </a>
        )}
        <TrackModal
          modalId={modalId}
          data={data}
          track={this.track}
          untrack={this.untrack}
        />
      </React.Fragment>
    )
  }

  track = (e, providerId, status, notes) => {
    e.preventDefault()

    this.apiClient
      .putMeConference(providerId, 'tracked', {
        meta: { trackingStatus: status, notes },
      })
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.props.data, isTracked: true, trackingStatus: status },
          status: 'Success',
        })

        window.$(`#modal_${providerId}`).modal('hide')
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }

  untrack = (e, providerId) => {
    e.preventDefault()

    this.apiClient
      .deleteMeConference(providerId, 'tracked')
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.props.data, isTracked: false, trackingStatus: null },
          status: 'Success',
        })

        window.$(`#modal_${providerId}`).modal('hide')
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }
}

export default TrackButton
