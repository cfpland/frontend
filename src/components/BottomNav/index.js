import React from 'react'
import './style.scss'

class BottomNav extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light d-block d-md-none">
        <div className="w-100">
          <a className="nav-item nav-link" href="/">
            <div>
              <i className="fa fa-home" />
            </div>
            Home
          </a>
          <a className="nav-item nav-link" href="/">
            <div>
              <i className="fa fa-star" />
            </div>
            Saved
          </a>
          <a className="nav-item nav-link" href="/submit">
            <div>
              <i className="fa fa-plus-circle" />
            </div>
            Submit
          </a>
          <a className="nav-item nav-link" href="/">
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
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default BottomNav
