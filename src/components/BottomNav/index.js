import React from 'react'
import './style.scss'
import { Link } from '@reach/router'

class BottomNav extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light d-block d-md-none">
        <div className="w-100">
          <Link className="nav-item nav-link" to="/conferences/">
            <div>
              <i className="fa fa-list" />
            </div>
            All
          </Link>
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
          <Link className="nav-item nav-link" to="/submit">
            <div>
              <i className="fa fa-plus-circle" />
            </div>
            Submit
          </Link>
          <a
            className="nav-item nav-link"
            href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
            target="_blank"
          >
            <div>
              <i className="fa fa-paper-plane" />
            </div>
            Tracked
          </a>
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
              <a
                className="dropdown-item"
                href="https://pro.cfpland.com/?utm_source=web&utm_campaign=hide"
                target="_blank"
              >
                <i className="fa fa-eye-slash mr-2" /> Hidden
              </a>
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
