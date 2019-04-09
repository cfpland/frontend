import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import './confirm.scss'

class Submit extends React.Component {
  render() {
    const height = 700
    const { location } = this.props
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Confirm Your Email Address" />
        <div className="container mt-3">
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

export default Submit
