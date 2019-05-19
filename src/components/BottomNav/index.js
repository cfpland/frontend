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

          {isAuthenticated ? (
            <Link
              className={
                location.pathname === '/c/searches/'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              }
              to="/c/searches/"
            >
              <div>
                <i className="fa fa-search" />
              </div>
              Searches
            </Link>
          ) : (
            <a
              className="nav-item nav-link"
              href="https://pro.cfpland.com/?utm_source=web&utm_campaign=save-search"
              target="_blank"
            >
              <div>
                <i className="fa fa-search" />
              </div>
              Searches
            </a>
          )}

          <Link
            className={
              location.pathname === '/submit/'
                ? 'nav-item nav-link active'
                : 'nav-item nav-link'
            }
            to="/submit/"
          >
            <div>
              <i className="fa fa-plus-circle" />
            </div>
            Submit
          </Link>

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

              {isAuthenticated ? (
                <Link className="dropdown-item" to="/c/saved/">
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
                <Link className="dropdown-item" to="/c/saved/">
                  <i className="fa fa-paper-plane mr-2" /> Tracking
                </Link>
              ) : (
                <a
                  className="dropdown-item"
                  href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
                  target="_blank"
                >
                  <i className="fa fa-paper-plane mr-2" /> Tracking
                </a>
              )}

              <Link className="dropdown-item" to="/blog">
                <i className="fa fa-newspaper-o mr-2" /> Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default BottomNav
