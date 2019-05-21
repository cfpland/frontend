import React from 'react'
import './style.scss'
import ApiClient from '../../../utilities/api-client'
import TrackModal from '../../TrackModal'

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
      <div>
        {isAuthenticated ? (
          <a
            href="#"
            data-toggle="modal"
            data-target={`#${modalId}`}
            title="Track"
            className={
              data.isTracked
                ? 'track-link nav-item nav-link border-right text-info'
                : 'track-link nav-item nav-link border-right'
            }
          >
            <div>
              <i className="fa fa-paper-plane" />
            </div>
            {data.isTracked ? 'Tracked' : 'Track'}
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
      </div>
    )
  }

  track = (e, providerId, status) => {
    e.preventDefault()

    this.apiClient
      .putMeConference(providerId, 'tracked', {
        meta: { trackingStatus: status },
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
