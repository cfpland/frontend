import React from 'react'
import './style.scss'
import { Link } from '@reach/router'
import Auth from 'utilities/auth'

class BottomNav extends React.Component {
  render() {
    const { location, title } = this.props
    const auth = new Auth()
    const isAuthenticated = auth.isAuthenticated()
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light d-block d-md-none">
        <div className="w-100">
          {isAuthenticated ? (
            <Link
              className={
                location.pathname === '/c/all/'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              }
              to="/c/all/"
            >
              <div>
                <i className="fa fa-list" />
              </div>
              CFPs
            </Link>
          ) : (
            <Link
              className={
                location.pathname === '/conferences/'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              }
              to="/conferences/"
            >
              <div>
                <i className="fa fa-list" />
              </div>
              All
            </Link>
          )}

          {isAuthenticated ? (
            <Link
              className={
                location.pathname === '/c/saved/'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              }
              to="/c/saved/"
            >
              <div>
                <i className="fa fa-star" />
              </div>
              Saved
            </Link>
          ) : (
            <a
              className="nav-item nav-link"
              href="https://pro.cfpland.com/?utm_source=web&utm_campaign=save"
              target="_blank"
            >
              <div>
                <i className="fa fa-star" />
              </div>
              Saved
            </a>
          )}

          {isAuthenticated ? (
            <Link
              className={
                location.pathname === '/c/applied/'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              }
              to="/c/applied/"
            >
              <div>
                <i className="fa fa-paper-plane" />
              </div>
              Applied
            </Link>
          ) : (
            <a
              className="nav-item nav-link"
              href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
              target="_blank"
            >
              <div>
                <i className="fa fa-paper-plane" />
              </div>
              Applied
            </a>
          )}

          {isAuthenticated ? (
            <Link
              className={
                location.pathname === '/c/accepted/'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              }
              to="/c/accepted/"
            >
              <div>
                <i className="fa fa-check-circle-o" />
              </div>
              Accepted
            </Link>
          ) : (
            <a
              className="nav-item nav-link"
              href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
              target="_blank"
            >
              <div>
                <i className="fa fa-check-circle-o" />
              </div>
              Accepted
            </a>
          )}

          <div className="dropup nav-item">
            <a
              className="nav-link dropdown-toggle"
              id="bottom-nav-dropup"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div>
                <i className="fa fa-ellipsis-h" />
              </div>{' '}
              More
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="bottom-nav-dropup"
            >
              <Link className="dropdown-item" to="/">
                <i className="fa fa-home mr-2" /> Home
              </Link>

              <Link className="dropdown-item" to="/blog">
                <i className="fa fa-newspaper-o mr-2" /> Blog
              </Link>

              <div className="dropdown-divider" />

              {isAuthenticated ? (
                <Link className="dropdown-item" to="/c/hidden/">
                  <i className="fa fa-eye-slash mr-2" /> Hidden
                </Link>
              ) : (
                <a
                  className="dropdown-item"
                  href="https://pro.cfpland.com/?utm_source=web&utm_campaign=hide"
                  target="_blank"
                >
                  <i className="fa fa-eye-slash mr-2" /> Hidden
                </a>
              )}

              {isAuthenticated ? (
                <Link className="dropdown-item" to="/c/rejected/">
                  <i className="fa fa-times-circle-o mr-2" /> Rejected
                </Link>
              ) : (
                <a
                  className="dropdown-item"
                  href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
                  target="_blank"
                >
                  <i className="fa fa-times-circle-o mr-2" /> Rejected
                </a>
              )}

              <Link className="dropdown-item" to="/submit/">
                <i className="fa fa-plus-circle mr-2" /> Submit
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default BottomNav
