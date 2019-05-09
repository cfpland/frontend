import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'
import AccountForm from 'components/AccountForm'

class Account extends React.Component {
  render() {
    const auth = new Auth()
    const { location } = this.props
    if (!auth.isAuthenticated()) {
      window.location.href = '/'
    }

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            <h1>Your Account</h1>
            <AccountForm />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Account
