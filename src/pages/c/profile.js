import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ProfileForm from 'components/ProfileForm'
import { withAuthentication } from '../../context/withAuthentication'

class Profile extends React.Component {
  login = e => {
    e.preventDefault()
    this.props.authClient.login()
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
                <h1>Edit Profile</h1>
                <ProfileForm auth={auth} />
              </React.Fragment>
            ) : (
              <a className="nav-link" onClick={this.login} href="#">
                Login
              </a>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Profile)
