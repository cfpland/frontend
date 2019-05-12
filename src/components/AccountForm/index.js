import React from 'react'
import './style.scss'
import ApiClient from 'utilities/api-client'
import { cleanNullValues } from 'utilities/clean-null-values'

class AccountForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      account: {
        email: '',
        firstName: '',
        lastName: '',
        twitter: '',
        website: '',
      },
    }

    this.apiClient = new ApiClient()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true })

    this.apiClient
      .getMe()
      .then(res => {
        const data = cleanNullValues(res.data)

        this.setState({
          ...this.state,
          account: { ...this.state.account, ...data },
          loading: false,
        })
      })
      .catch(error => this.setState({ ...this.state, error }))
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      account: {
        ...this.state.account,
        [event.target.name]: event.target.value,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
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
            onChange={this.handleChange}
            required
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
          <p className="small cancel">
            Need to cancel your account? Email{' '}
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
}

export default AccountForm
