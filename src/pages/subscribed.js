import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../context/withAuthentication'

class Submit extends React.Component {
  render() {
    const { location, auth } = this.props
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Subscription Confirmed" />
        <div className="container confirm-container mt-3">
          <h1 className="mt-5 mb-4"> 📬 Subscription Confirmed!</h1>
          <p>Your subscription to CFP Land has been confirmed.</p>
          <p>
            Every week, you'll get dozens of Calls for Proposals right in your
            inbox.
          </p>
          <p>
            Have feedback? Email{' '}
            <a href="mailto:karl@cfpland.com">karl@cfpland.com</a>.
          </p>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Submit)
