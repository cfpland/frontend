import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../context/withAuthentication'

class Confirm extends React.Component {
  render() {
    const { location, auth } = this.props
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Confirm Your Email Address" />
        <div className="container confirm-container mt-3">
          <h1 className="mt-5 mb-4"> 📬 Almost Done...</h1>
          <p>
            You're just one click away from getting our weekly CFP newsletter.
          </p>
          <p>
            Please{' '}
            <strong>check your email to confirm your subscription</strong>.
            Thanks!
          </p>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Confirm)
