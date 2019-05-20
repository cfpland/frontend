import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class SavedListNav extends React.Component {
  render = () => {
    const { location } = this.props
    return (
      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/saved/' ? 'nav-link active' : 'nav-link'
            }
            to="/c/saved/"
          >
            <i className="fa fa-star" /> Saved
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/hidden/'
                ? 'nav-link active'
                : 'nav-link'
            }
            to="/c/hidden/"
          >
            <i className="fa fa-eye-slash" /> Hidden
          </Link>
        </li>
      </ul>
    )
  }
}

export default SavedListNav
