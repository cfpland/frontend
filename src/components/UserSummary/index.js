import React from 'react'
import './style.scss'
import { Link } from 'gatsby'
import ApiClient from '../../utilities/api-client'

class UserSummary extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      openCfps: null,
      savedCfps: null,
      appliedCfps: null,
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    const { auth } = this.props
    this._isMounted = true

    if (this.apiClient.isAuthenticated) {
      this.apiClient.getSavedConferences().then(userConferences => {
        this.setState({
          ...this.state,
          savedCfps: userConferences.data.items.filter(
            uc => uc.action === 'saved'
          ).length,
          appliedCfps: userConferences.data.items.filter(
            uc =>
              uc.action === 'tracked' && uc.meta.trackingStatus === 'applied'
          ).length,
        })
      })
      this.apiClient.getConferences().then(conferences => {
        this.setState({
          ...this.state,
          openCfps: conferences.data.total,
        })
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <div id="userSummary" className="container mt-1 mt-md-5">
        <h1>Your Usage Summary</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mt-3">
              <div className="card-header">Open CFPs</div>
              <div className="card-body">
                <Link className="total text-info" to="/c/all/">
                  {this.state.openCfps || '...'}
                </Link>
              </div>
              <div className="card-footer">
                <Link to="/c/all/">
                  <i className="fa fa-list mr-1" /> View All
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center mt-3">
              <div className="card-header">Saved CFPs</div>
              <div className="card-body">
                <Link className="total text-warning" to="/c/saved/">
                  {this.state.savedCfps === null ? '...' : this.state.savedCfps}
                </Link>
              </div>
              <div className="card-footer">
                <Link to="/c/saved/">
                  <i className="fa fa-star mr-1" /> View Saved
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center mt-3">
              <div className="card-header">Applied</div>
              <div className="card-body">
                <Link className="total text-success" to="/c/applied/">
                  {this.state.appliedCfps === null
                    ? '...'
                    : this.state.appliedCfps}
                </Link>
              </div>
              <div className="card-footer">
                <Link to="/c/applied/">
                  <i className="fa fa-list mr-1" /> View Applications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSummary
