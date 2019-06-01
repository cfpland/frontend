import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'
import ProfileForm from 'components/ProfileForm'
import queryString from 'querystring'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.auth = new Auth()
  }

  login = e => {
    e.preventDefault()
    this.auth.login()
  }

  logout = e => {
    e.preventDefault()
    this.auth.logout()
  }

  render = () => {
    const { location } = this.props
    let tab = 'profile'
    if (location.search) {
      const query = queryString.parse(location.search.substring(1))
      if (query && query.tab) {
        tab = query.tab
      }
    }

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            {this.auth.isAuthenticated() ? (
              <React.Fragment>
                <h1>Edit Profile</h1>
                <ProfileForm />
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

export default Profile
