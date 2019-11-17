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
          <p>
            Your subscription to CFP Land has been confirmed. Every week, you'll
            get dozens of Calls for Proposals right in your inbox.
          </p>
          <h3 className="mt-5">Are you a professional speaker?</h3>
          <p>
            Check out <a href="https://pro.cfpland.com/">CFP Land Pro</a> - the
            tracking tool for professional conference speakers. Get reminders
            when CFPs you care about are closing, store your abstracts and
            searches, and track conference acceptances and rejections.
          </p>
          <p>
            <a href="https://pro.cfpland.com/" className="btn btn-info">
              Learn More
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Submit)
