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
              <h5 className="modal-title" id="exampleModalLabel">
                Track Conference
              </h5>
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

              <div className="row">
                <div className="col-4">
                  <button type="button" className="btn btn-primary btn-block">
                    <div>
                      <i className="fa fa-paper-plane-o" />
                    </div>
                    Applied
                  </button>
                </div>

                <div className="col-4">
                  <button type="button" className="btn btn-primary btn-block">
                    <div>
                      <i className="fa fa-check-circle" />
                    </div>
                    Accepted
                  </button>
                </div>

                <div className="col-4">
                  <button type="button" className="btn btn-primary btn-block">
                    <div>
                      <i className="fa fa-times-circle" />
                    </div>
                    Rejected
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackModal
