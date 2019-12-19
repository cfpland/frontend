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
        <Meta site={siteMetadata} title="Submit" />
        <div className="container mt-3">
          <iframe
            src="https://services.cognitoforms.com/f/NxUKF4s5RkuDymUa6IcPow?id=1"
            frameBorder="0"
            scrolling="yes"
            seamless="seamless"
            height="1200"
            width="100%"
          />
          <script src="https://services.cognitoforms.com/scripts/embed.js" />
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Submit)
