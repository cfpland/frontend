import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../context/withAuthentication'

class SignUp extends React.Component {
  componentDidMount = () => {
    this.props.authClient.login()
  }

  render() {
    const login = e => {
      e.preventDefault()
      this.props.authClient.login()
    }

    const { location, auth } = this.props
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Sign Up" />
        <div className="container confirm-container mt-3">
          <h1 className="mt-5 mb-4">Pro Signup</h1>
          <p>You should be redirected to create your email and password.</p>
          <p>
            If not,{' '}
            <a href="#" onClick={login}>
              click here
            </a>
            .
          </p>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(SignUp)
