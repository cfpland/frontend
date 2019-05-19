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
            Saved
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/applied/'
                ? 'nav-link active'
                : 'nav-link'
            }
            to="/c/saved/"
          >
            Applied
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/accepted/'
                ? 'nav-link active'
                : 'nav-link'
            }
            to="/c/saved/"
          >
            Accepted
          </Link>
        </li>
      </ul>
    )
  }
}

export default SavedListNav
