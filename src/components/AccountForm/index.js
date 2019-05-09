import React from 'react'
import './style.scss'

class AccountForm extends React.Component {
  render() {
    return (
      <form className="row account-form" action="#" method="post">
        <div className="col-12">
          <label htmlFor="emailInput">Email Address</label>
          <input
            name="email"
            type="email"
            className="form-control mb-3"
            id="emailInput"
            placeholder="Your email"
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
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success btn-block mb-3">
            Save
          </button>
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
