import React from 'react'
import './style.scss'
import ApiClient from 'utilities/api-client'
import { cleanNullValues } from 'utilities/clean-null-values'
import { statuses } from 'utilities/statuses'

class AccountForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: statuses.READY,
      account: {
        email: '',
        firstName: '',
        lastName: '',
        twitter: '',
        website: '',
      },
    }

    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this.setState({ ...this.state, status: statuses.LOADING })

    this.apiClient
      .getMe()
      .then(res => {
        const data = cleanNullValues(res.data)

        this.setState({
          ...this.state,
          account: { ...this.state.account, ...data },
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
      account: {
        ...this.state.account,
        [event.target.name]: event.target.value,
      },
    })
  }

  handleSubmit = event => {
    this.setState({ ...this.state, status: statuses.SAVING })
    event.preventDefault()

    this.apiClient
      .patchMe(this.state.account)
      .then(res => {
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
      <div className="col-12">
        <label htmlFor="emailInput">Email Address</label>
        <input
          name="email"
          type="email"
          className="form-control mb-3"
          id="emailInput"
          placeholder="Your email"
          value={this.state.account.email || ''}
          disabled
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="first_name">First Name</label>
        <input
          name="firstName"
          type="text"
          className="form-control mb-3"
          id="firstName"
          placeholder="First name"
          value={this.state.account.firstName || ''}
          onChange={this.handleChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="last_name">Last Name</label>
        <input
          name="lastName"
          type="text"
          className="form-control mb-3"
          id="lastName"
          placeholder="Last name"
          value={this.state.account.lastName || ''}
          onChange={this.handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="twitter">Twitter URL</label>
        <input
          name="twitter"
          type="text"
          className="form-control mb-3"
          id="twitter"
          placeholder="https://twitter.com/YourHandle"
          value={this.state.account.twitter || ''}
          onChange={this.handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="website">Website URL</label>
        <input
          name="website"
          type="text"
          className="form-control mb-3"
          id="website"
          placeholder="https://your-website.com"
          value={this.state.account.website || ''}
          onChange={this.handleChange}
        />
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
            <strong>Account saved!</strong> You can now carry on with your day.
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="col-12">
        <p className="small cancel">
          Need to cancel your account or change your email address? Email{' '}
          <a
            className="text-danger"
            href="mailto:info@cfpland.com"
            target="_blank"
          >
            info@cfpland.com
          </a>
          .
        </p>
      </div>
    </form>
  )
}

export default AccountForm
