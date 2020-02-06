import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../context/withAuthentication'
import GatsbyLink from 'gatsby-link'

class Guides extends React.Component {
  render() {
    const { location, auth } = this.props

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Guides" />
        <div className="container confirm-container">
          <div className="article pr-2 pl-2 pr-md-4 pl-md-4">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <img
                  src="/img/v2/logo-lg-no-icon.png"
                  alt="CFP Land"
                  className="img-fluid"
                />
                <h1 className="text-center">Guides</h1>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <GatsbyLink to="/guides/speaking/">
                        Speaking at Technology Conferences
                      </GatsbyLink>
                    </h5>
                    <p className="card-text">
                      A 17000+ word compilation of all the best advice from
                      experienced conference speakers around the world.
                    </p>
                    <GatsbyLink
                      to="/guides/speaking/"
                      className="btn btn-info btn-block"
                    >
                      Get it
                    </GatsbyLink>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Public Speaking for Developers
                    </h5>
                    <p className="card-text mb-4 mt-4">Coming soon.</p>
                    <button className="btn btn-info btn-block disabled">
                      Get it
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Guides)
