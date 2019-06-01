import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'

class Communication extends React.Component {
  constructor(props) {
    super(props)
    this.auth = new Auth()
  }

  render = () => {
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            {this.auth.isAuthenticated() ? (
              <React.Fragment>
                <h1>Billing Information</h1>
                <p>Coming soon!</p>
                <p className="small cancel">
                  Need to cancel your account or change your email address?
                  Email{' '}
                  <a
                    className="text-danger"
                    href="mailto:info@cfpland.com"
                    target="_blank"
                  >
                    info@cfpland.com
                  </a>
                  .
                </p>
              </React.Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Communication
