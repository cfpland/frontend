import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" width="30" height="30" alt={title} />
          </Link>
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
              <li
                className={
                  location.pathname === '/conferences'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/conferences" className="nav-link">
                  CFPs
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/blog' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/submit'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/submit" className="nav-link">
                  Submit
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
