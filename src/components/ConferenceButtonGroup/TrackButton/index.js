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
          data.isTracked ? (
            <a
              href="#"
              onClick={e => this.showModal(e, data.providerId)}
              title="Track"
              className="track-link nav-item nav-link border-right text-warning"
            >
              <div>
                <i className="fa fa-paper-plane" />
              </div>
              Tracked
            </a>
          ) : (
            <a
              href="#"
              data-toggle="modal"
              data-target={`#${modalId}`}
              title="Track"
              className="track-link nav-item nav-link border-right"
            >
              <div>
                <i className="fa fa-compass" />
              </div>
              Track
            </a>
          )
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
        <TrackModal modalId={modalId} />
      </div>
    )
  }

  showModal = (e, providerId) => {
    e.preventDefault()
    console.log('Modal')
  }

  save = (e, providerId) => {
    e.preventDefault()

    this.apiClient
      .putMeConference(providerId, 'saved')
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.state.data, isSaved: true },
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }

  unsave = (e, providerId) => {
    e.preventDefault()

    this.apiClient
      .deleteMeConference(providerId, 'saved')
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.state.data, isSaved: false },
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }
}

export default TrackButton
