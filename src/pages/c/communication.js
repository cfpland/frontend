import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import CommunicationForm from '../../components/CommunicationForm'
import { withAuthentication } from '../../context/withAuthentication'

class Communication extends React.Component {
  componentWillReceiveProps = (nextProps, nextContext) => {
    if (nextProps && nextProps.auth && !nextProps.auth.isAuthenticated) {
      window.location.href = '/'
    }
  }

  render = () => {
    const { location, auth } = this.props
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            {auth.isAuthenticated ? (
              <React.Fragment>
                <h1>Communication Preferences</h1>
                <CommunicationForm auth={auth} />
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

export default withAuthentication(Communication)
