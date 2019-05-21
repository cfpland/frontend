import React from 'react'
import './style.scss'
import ApiClient from '../../../utilities/api-client'

class HideButton extends React.Component {
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

    return isAuthenticated ? (
      data.isHidden ? (
        <a
          href="#"
          onClick={e => this.unhide(e, data.providerId)}
          title="Unhide"
          className="dropdown-item hide-link"
        >
          <i className="fa fa-eye-slash mr-2" />
          <span className="hidden" />
        </a>
      ) : (
        <a
          href="#"
          onClick={e => this.hide(e, data.providerId)}
          title="Hide"
          className="dropdown-item hide-link"
        >
          <i className="fa fa-eye-slash mr-2" />
          Hide
        </a>
      )
    ) : (
      <a
        className="dropdown-item hide-link"
        href="https://pro.cfpland.com/?utm_source=web&utm_campaign=hide"
        target="_blank"
      >
        <i className="fa fa-eye-slash mr-2" />
        Hide
      </a>
    )
  }

  hide = (e, providerId) => {
    e.preventDefault()

    this.apiClient
      .putMeConference(providerId, 'hidden')
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.props.data, isHidden: true },
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }

  unhide = (e, providerId) => {
    e.preventDefault()

    this.apiClient
      .deleteMeConference(providerId, 'hidden')
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.props.data, isHidden: false },
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }
}

export default HideButton
