import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from '../../utilities/auth'
import { withAuthentication } from '../../context/withAuthentication'
import UserSummary from 'components/UserSummary'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.authClient = new Auth()
  }

  login = e => {
    e.preventDefault()
    this.authClient.login()
  }

  render = () => {
    const { location, auth } = this.props

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Your Account" />
        {auth && auth.isAuthenticated ? (
          <UserSummary auth={auth} />
        ) : (
          <a className="nav-link" onClick={this.login} href="#">
            Login
          </a>
        )}
      </Layout>
    )
  }
}

export default withAuthentication(Dashboard)
