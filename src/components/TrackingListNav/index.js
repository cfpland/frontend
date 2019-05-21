import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class TrackingListNav extends React.Component {
  render = () => {
    const { location } = this.props
    return (
      <ul className="nav nav-pills justify-content-center mb-2">
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/applied/'
                ? 'nav-link active'
                : 'nav-link'
            }
            to="/c/applied/"
          >
            <i className="fa fa-paper-plane" /> Applied
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/accepted/'
                ? 'nav-link active'
                : 'nav-link'
            }
            to="/c/accepted/"
          >
            <i className="fa fa-check-circle" /> Accepted
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/rejected/'
                ? 'nav-link active'
                : 'nav-link'
            }
            to="/c/rejected/"
          >
            <i className="fa fa-times-circle" /> Rejected
          </Link>
        </li>
      </ul>
    )
  }
}

export default TrackingListNav
