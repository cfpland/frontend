import React from 'react'
import './style.scss'

class AccountForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      twitter: '',
      website: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
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
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            type="text"
            className="form-control mb-3"
            id="first_name"
            placeholder="First name"
            value={this.state.first_name}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            type="text"
            className="form-control mb-3"
            id="last_name"
            placeholder="Last name"
            value={this.state.last_name}
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
            value={this.state.twitter}
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
            value={this.state.website}
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
