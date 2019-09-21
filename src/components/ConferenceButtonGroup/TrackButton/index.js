import React from 'react'
import './style.scss'
import ApiClient from '../../../utilities/api-client'
import TrackModal from '../../TrackModal'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import ReactGA from 'react-ga'

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

const getTrackIconClass = data => {
  if (data.isTracked) {
    if (data.trackingStatus === 'applied') {
      return 'fa fa-paper-plane-o'
    } else if (data.trackingStatus === 'accepted') {
      return 'fa fa-check'
    } else if (data.trackingStatus === 'rejected') {
      return 'fa fa-times-circle'
    }
  }

  return 'fa fa-compass'
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
    const { isAuthenticated, abstracts } = this.props
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
              <i className={getTrackIconClass(data)} />
            </div>
            {data.isTracked ? data.trackingStatus : 'Track'}
          </a>
        ) : (
          <OutboundLink
            className="nav-item nav-link border-right"
            href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
            target="_blank"
          >
            <div>
              <i className="fa fa-compass" />
            </div>
            Track
          </OutboundLink>
        )}
        <TrackModal
          modalId={modalId}
          data={data}
          track={this.track}
          untrack={this.untrack}
          abstracts={abstracts}
        />
      </React.Fragment>
    )
  }

  track = (e, providerId, data) => {
    e.preventDefault()

    this.apiClient
      .putTrackedConference(providerId, data)
      .then(res => {
        this.setState({
          ...this.state,
          data: {
            ...this.props.data,
            isTracked: true,
            trackingStatus: data.status,
          },
          status: 'Success',
        })

        this.props.actionCallback({
          isTracked: true,
          trackingStatus: data.status,
        })

        ReactGA.event({
          category: 'Conference',
          action: `track-${data.status}`,
          label: providerId,
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
      .deleteTrackedConference(providerId)
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.props.data, isTracked: false, trackingStatus: null },
          status: 'Success',
        })

        this.props.actionCallback({ isTracked: false, trackingStatus: null })

        ReactGA.event({
          category: 'Conference',
          action: 'untrack',
          label: providerId,
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
