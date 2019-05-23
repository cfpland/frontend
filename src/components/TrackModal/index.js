import React from 'react'
import './style.scss'

class TrackModal extends React.Component {
  render = () => {
    return (
      <div
        className="modal fade"
        id={this.props.modalId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Track Conference</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>What's the status of your application?</p>

              <div className="row mt-3 mb-3">
                <div className="col-4">
                  <button
                    type="button"
                    className={
                      this.props.data.trackingStatus === 'applied'
                        ? 'btn btn-info btn-block'
                        : 'btn btn-outline-info btn-block'
                    }
                    onClick={e =>
                      this.props.track(e, this.props.data.providerId, 'applied')
                    }
                  >
                    <div>
                      <i className="fa fa-paper-plane-o" />
                    </div>
                    Applied
                  </button>
                </div>

                <div className="col-4">
                  <button
                    type="button"
                    className={
                      this.props.data.trackingStatus === 'accepted'
                        ? 'btn btn-success btn-block'
                        : 'btn btn-outline-success btn-block'
                    }
                    onClick={e =>
                      this.props.track(
                        e,
                        this.props.data.providerId,
                        'accepted'
                      )
                    }
                  >
                    <div>
                      <i className="fa fa-check-circle" />
                    </div>
                    Accepted
                  </button>
                </div>

                <div className="col-4">
                  <button
                    type="button"
                    className={
                      this.props.data.trackingStatus === 'rejected'
                        ? 'btn btn-danger btn-block'
                        : 'btn btn-outline-danger btn-block'
                    }
                    onClick={e =>
                      this.props.track(
                        e,
                        this.props.data.providerId,
                        'rejected'
                      )
                    }
                  >
                    <div>
                      <i className="fa fa-times-circle" />
                    </div>
                    Rejected
                  </button>
                </div>
              </div>

              {this.props.data.isTracked ? (
                <p>
                  <a
                    href="#"
                    onClick={e =>
                      this.props.untrack(e, this.props.data.providerId)
                    }
                  >
                    Untrack
                  </a>
                </p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackModal
