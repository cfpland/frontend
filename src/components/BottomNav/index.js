import React from 'react'
import './style.scss'
import { Link } from '@reach/router'
import Auth from 'utilities/auth'

class BottomNav extends React.Component {
  render() {
    const { location } = this.props
    const auth = new Auth()
    const isAuthenticated = auth.isAuthenticated()
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light d-block d-md-none">
        <div className="w-100">
          {isAuthenticated ? (
            <React.Fragment>
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

                  <Link className="dropdown-item" to="/c/rejected/">
                    <i className="fa fa-times-circle-o mr-2" /> Rejected
                  </Link>

                  <Link className="dropdown-item" to="/c/hidden/">
                    <i className="fa fa-eye-slash mr-2" /> Hidden
                  </Link>

                  <Link className="dropdown-item" to="/submit/">
                    <i className="fa fa-plus-circle mr-2" /> Submit
                  </Link>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link
                className={
                  location.pathname === '/'
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                to="/"
              >
                <div>
                  <i className="fa fa-home" />
                </div>
                Home
              </Link>
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
                CFPs
              </Link>
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
              <Link
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                to="/blog/"
              >
                <div>
                  <i className="fa fa-newspaper-o" />
                </div>
                Blog
              </Link>
              <a
                className="nav-item nav-link"
                href="https://pro.cfpland.com/?utm_source=web&utm_campaign=menu"
                target="_blank"
              >
                <div>
                  <i className="fa fa-arrow-up" />
                </div>
                Pro
              </a>
            </React.Fragment>
          )}
        </div>
      </nav>
    )
  }
}

export default BottomNav
