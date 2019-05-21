import React from 'react'
import './style.scss'
import ApiClient from '../../../utilities/api-client'

class SaveButton extends React.Component {
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
      data.isSaved ? (
        <a
          href="#"
          onClick={e => this.unsave(e, data.providerId)}
          title="Unsave"
          className="save-link nav-item nav-link border-right text-warning"
        >
          <div>
            <i className="fa fa-star" />
          </div>
          <span className="saved" />
        </a>
      ) : (
        <a
          href="#"
          onClick={e => this.save(e, data.providerId)}
          title="Save"
          className="save-link nav-item nav-link border-right"
        >
          <div>
            <i className="fa fa-star-o" />
          </div>
          Save
        </a>
      )
    ) : (
      <a
        className="save-link nav-item nav-link border-right"
        href="https://pro.cfpland.com/?utm_source=web&utm_campaign=save"
        target="_blank"
      >
        <div>
          <i className="fa fa-star-o" />
        </div>
        Save
      </a>
    )
  }

  save = (e, providerId) => {
    e.preventDefault()

    this.apiClient
      .putMeConference(providerId, 'saved')
      .then(res => {
        this.setState({
          ...this.state,
          data: { ...this.props.data, isSaved: true },
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
          data: { ...this.props.data, isSaved: false },
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }
}

export default SaveButton
