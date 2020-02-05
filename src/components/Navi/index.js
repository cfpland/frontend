import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import Auth from 'utilities/auth'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.authClient = new Auth()
  }

  render = () => {
    const { location, title, auth } = this.props

    const login = e => {
      e.preventDefault()
      this.authClient.login()
    }

    const logout = e => {
      e.preventDefault()
      this.authClient.logout()
    }

    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container-fluid">
          {auth.isAuthenticated ? (
            <Link className="navbar-brand" to="/c/all">
              <img
                src="/img/v2/icon-sm.png"
                width="40"
                height="40"
                alt={title}
              />
            </Link>
          ) : (
            <Link className="navbar-brand" to="/">
              <img
                src="/img/v2/icon-sm.png"
                width="40"
                height="40"
                alt={title}
              />
            </Link>
          )}
          <div className="navbar-nav-scroll d-none d-md-block">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {auth.isAuthenticated ? (
                <li
                  className={
                    location.pathname === '/c/all/'
                      ? 'nav-item active dropdown'
                      : 'nav-item dropdown'
                  }
                >
                  <Link
                    to="/c/all/"
                    className="nav-link dropdown-toggle"
                    id="cfpNavbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    CFPs
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="cfpNavbarDropdown"
                  >
                    <Link className="dropdown-item" to="/c/all/">
                      <i className="fa fa-list mr-2" /> All
                    </Link>
                    <Link className="dropdown-item" to="/c/saved/">
                      <i className="fa fa-star mr-2" /> Saved
                    </Link>
                    <Link className="dropdown-item" to="/c/applied/">
                      <i className="fa fa-paper-plane mr-2" /> Applied
                    </Link>
                    <Link className="dropdown-item" to="/c/accepted/">
                      <i className="fa fa-check mr-2" /> Accepted
                    </Link>
                    <Link className="dropdown-item" to="/c/rejected/">
                      <i className="fa fa-times-circle-o mr-2" /> Rejected
                    </Link>
                  </div>
                </li>
              ) : (
                <li
                  className={
                    location.pathname === '/conferences/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/conferences/" className="nav-link">
                    CFPs
                  </Link>
                </li>
              )}
              <li
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/submit/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/submit/" className="nav-link">
                  Submit
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
          <ul className="navbar-nav bd-navbar-nav flex-row">
            {auth.isAuthenticated ? (
              <li
                className={
                  location.pathname === '/c/profile/'
                    ? 'nav-item active dropdown'
                    : 'nav-item dropdown'
                }
              >
                <Link
                  to="/c/profile/"
                  className="nav-link dropdown-toggle"
                  id="accountNavbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {auth.user && auth.user.profileUrl ? (
                    <img
                      src={auth.user.profileUrl}
                      alt="Your Profile Image"
                      className="navbar-profile-image"
                    />
                  ) : (
                    ''
                  )}
                  Account
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="accountNavbarDropdown"
                >
                  <Link className="dropdown-item" to="/c/profile/">
                    <i className="fa fa-user mr-2" /> Profile
                  </Link>
                  <Link className="dropdown-item" to="/c/communication/">
                    <i className="fa fa-bell mr-2" /> Communication
                  </Link>
                  <Link className="dropdown-item" to="/c/billing/">
                    <i className="fa fa-credit-card mr-2" /> Billing
                  </Link>
                  <Link className="dropdown-item" to="/c/searches/">
                    <i className="fa fa-search mr-2" /> Searches
                  </Link>
                  <Link className="dropdown-item" to="/c/abstracts/">
                    <i className="fa fa-sticky-note mr-2" /> Abstracts
                  </Link>
                  <Link className="dropdown-item" to="/c/onboarding/?step=4">
                    <i className="fa fa-star mr-2" /> Pro Features
                  </Link>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#" onClick={logout}>
                    <i className="fa fa-sign-out mr-2" /> Logout
                  </a>
                </div>
              </li>
            ) : (
              <React.Fragment>
                <li className="nav-item mr-2">
                  <a onClick={login} href="#" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="nav-item d-none d-md-block">
                  <Link
                    to="/members/"
                    className="nav-link btn btn-info font-weight-bold"
                    title="Upgrade to CFP Land Professional"
                  >
                    <i className="fa fa-arrow-up text-white" />{' '}
                    <span className="text-white">Upgrade to Pro</span>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navi
