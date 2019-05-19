import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'
import AccountForm from 'components/AccountForm'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.auth = new Auth()
  }

  login = e => {
    e.preventDefault()
    this.auth.login()
  }

  logout = e => {
    e.preventDefault()
    this.auth.logout()
  }

  render = () => {
    const { location } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            <h1>Your Account</h1>
            {this.auth.isAuthenticated() ? (
              <div>
                <AccountForm />
                <a className="nav-link" onClick={this.logout} href="#">
                  Logout
                </a>
              </div>
            ) : (
              <a className="nav-link" onClick={this.login} href="#">
                Login
              </a>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Account
