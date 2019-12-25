import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class SavedTypesNav extends React.Component {
  render = () => {
    const { auth, location } = this.props
    return (
      <ul className="nav nav-pills nav-fill mb-2 d-none d-md-flex saved-types-nav">
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/all/' ? 'nav-link active' : 'nav-link'
            }
            to="/c/all/"
          >
            <i className="fa fa-list mr-1" /> All
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/saved/'
                ? 'nav-link active'
                : auth && auth.user && auth.user.accountLevel === 'pro'
                ? 'nav-link'
                : 'nav-link disabled'
            }
            to={
              auth && auth.user && auth.user.accountLevel === 'pro'
                ? '/c/saved/'
                : '/c/onboarding/'
            }
          >
            <i className="fa fa-star mr-1" /> Saved
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/applied/'
                ? 'nav-link active'
                : auth && auth.user && auth.user.accountLevel === 'pro'
                ? 'nav-link'
                : 'nav-link disabled'
            }
            to={
              auth && auth.user && auth.user.accountLevel === 'pro'
                ? '/c/applied/'
                : '/c/onboarding/'
            }
          >
            <i className="fa fa-paper-plane mr-1" /> Applied
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/accepted/'
                ? 'nav-link active'
                : auth && auth.user && auth.user.accountLevel === 'pro'
                ? 'nav-link'
                : 'nav-link disabled'
            }
            to={
              auth && auth.user && auth.user.accountLevel === 'pro'
                ? '/c/accepted/'
                : '/c/onboarding/'
            }
          >
            <i className="fa fa-check mr-1" /> Accepted
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === '/c/rejected/'
                ? 'nav-link active'
                : auth && auth.user && auth.user.accountLevel === 'pro'
                ? 'nav-link'
                : 'nav-link disabled'
            }
            to={
              auth && auth.user && auth.user.accountLevel === 'pro'
                ? '/c/rejected/'
                : '/c/onboarding/'
            }
          >
            <i className="fa fa-times-circle mr-1" /> Rejected
          </Link>
        </li>
      </ul>
    )
  }
}

export default SavedTypesNav
