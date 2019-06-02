import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../../context/withAuthentication'
import BillingForm from '../../components/BillingForm'

class Billing extends React.Component {
  render = () => {
    const { location, auth } = this.props
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            {auth.isAuthenticated ? (
              <React.Fragment>
                <h1>Billing Information</h1>

                <BillingForm auth={auth} />

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

export default withAuthentication(Billing)
