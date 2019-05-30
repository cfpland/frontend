import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'
import ProfileForm from 'components/ProfileForm'
import queryString from 'querystring'

class Account extends React.Component {
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
            <h1>Your Account</h1>
            {this.auth.isAuthenticated() ? (
              <div className="mt-3">
                <ul className="nav nav-tabs" id="accountTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className={
                        tab === 'profile' ? 'nav-link active' : 'nav-link'
                      }
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-selected="true"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        tab === 'communication' ? 'nav-link active' : 'nav-link'
                      }
                      id="communication-tab"
                      data-toggle="tab"
                      href="#communication"
                      role="tab"
                      aria-selected="false"
                    >
                      Communication
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        tab === 'billing' ? 'nav-link active' : 'nav-link'
                      }
                      id="billing-tab"
                      data-toggle="tab"
                      href="#billing"
                      role="tab"
                      aria-selected="false"
                    >
                      Billing
                    </a>
                  </li>
                </ul>

                <div className="tab-content" id="accountTabContent">
                  <div
                    className={
                      tab === 'profile'
                        ? 'pt-3 tab-pane fade show active'
                        : 'pt-3 tab-pane fade'
                    }
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <ProfileForm />
                  </div>

                  <div
                    className={
                      tab === 'communication'
                        ? 'pt-3 tab-pane fade show active'
                        : 'pt-3 tab-pane fade'
                    }
                    id="communication"
                    role="tabpanel"
                    aria-labelledby="communication-tab"
                  >
                    <p>Communication</p>
                  </div>

                  <div
                    className={
                      tab === 'billing'
                        ? 'pt-3 tab-pane fade show active'
                        : 'pt-3 tab-pane fade'
                    }
                    id="billing"
                    role="tabpanel"
                    aria-labelledby="billing-tab"
                  >
                    <p>Billing</p>
                  </div>
                </div>

                <a className="nav-link" onClick={this.logout} href="#">
                  Logout
                </a>
              </div>
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

export default Account
