import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../../context/withAuthentication'
import UserSummary from 'components/UserSummary'

class Dashboard extends React.Component {
  login = e => {
    e.preventDefault()
    this.props.authClient.login()
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
