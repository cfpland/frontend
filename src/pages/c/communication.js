import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'
import CommunicationForm from '../../components/CommunicationForm'

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
                <h1>Communication Preferences</h1>
                <CommunicationForm />
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
