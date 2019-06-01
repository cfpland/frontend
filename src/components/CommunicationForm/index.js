import React from 'react'
import './style.scss'
import ApiClient from 'utilities/api-client'
import { statuses } from 'utilities/statuses'
import { Link } from 'gatsby'

class CommunicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: statuses.READY,
      communicationPreferences: {
        savedConferences: true,
        savedSearches: true,
        weeklySummary: true,
      },
    }

    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this.setState({ ...this.state, status: statuses.LOADING })

    this.apiClient
      .getMe()
      .then(res => {
        this.setState({
          ...this.state,
          communicationPreferences: {
            ...this.state.communicationPreferences,
            ...res.data.communicationPreferences,
          },
          status: statuses.READY,
        })
      })
      .catch(error => {
        console.error(error.message)
        this.setState({ ...this.state, status: statuses.ERROR })
      })
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      communicationPreferences: {
        ...this.state.communicationPreferences,
        [event.target.name]: event.target.checked,
      },
    })
  }

  handleSubmit = event => {
    this.setState({ ...this.state, status: statuses.SAVING })
    event.preventDefault()

    this.apiClient
      .patchMe({
        communicationPreferences: this.state.communicationPreferences,
      })
      .then(() => {
        this.setState({
          ...this.state,
          status: statuses.SAVED,
        })
      })
      .catch(error => {
        console.error(error.message)
        this.setState({ ...this.state, status: statuses.ERROR })
      })
  }

  render = () => (
    <form className="row account-form" onSubmit={this.handleSubmit}>
      <div className="col-12 mb-4">
        <p>Select the notifications you would like to receive.</p>

        <h5 className="mt-3">Saved CFPs</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            name="savedConferences"
            type="checkbox"
            checked={this.state.communicationPreferences.savedConferences}
            onChange={this.handleChange}
            id="savedConferences"
          />
          <label className="form-check-label" htmlFor="savedConferences">
            Receive email notifications 21, 7, and 2 days before any of your{' '}
            <Link to="/c/saved/">
              <i className="fa fa-star" /> Saved CFPs
            </Link>{' '}
            close.
          </label>
        </div>

        <h5 className="mt-3">Saved Searches</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            name="savedSearches"
            type="checkbox"
            checked={this.state.communicationPreferences.savedSearches}
            onChange={this.handleChange}
            id="savedSearches"
          />
          <label className="form-check-label" htmlFor="savedSearches">
            Receive daily email notifications when new CFPs match any of your{' '}
            <Link to="/c/searches/">
              <i className="fa fa-search" /> Saved Searches
            </Link>
            .
          </label>
        </div>

        <h5 className="mt-3">Weekly Summary</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            name="weeklySummary"
            type="checkbox"
            checked={this.state.communicationPreferences.weeklySummary}
            onChange={this.handleChange}
            id="weeklySummary"
          />
          <label className="form-check-label" htmlFor="weeklySummary">
            Receive a weekly email summary of your CFP Land Pro activity.
          </label>
        </div>
      </div>
      <div className="col-12">
        <input
          type="submit"
          value="Save"
          className="btn btn-success btn-block mb-3"
        />
      </div>
      <div className="col-12">
        {this.state.status === statuses.ERROR ? (
          <div className="alert alert-danger">
            <strong>Whoops! Something went wrong.</strong> Check the console to
            learn more or contact support for help.
          </div>
        ) : (
          ''
        )}
        {this.state.status === statuses.SAVED ? (
          <div className="alert alert-success">
            <strong>Communication preferences saved!</strong> You can now carry
            on with your day.
          </div>
        ) : (
          ''
        )}
      </div>
    </form>
  )
}

export default CommunicationForm
