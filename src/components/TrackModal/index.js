import React from 'react'
import './style.scss'

class TrackModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: '',
    }
  }

  // TODO: Save state
  // componentWillReceiveProps(nextProps, nextContext) {
  //   if (nextProps.trackingNotes && nextProps.trackingNotes !== this.state.get('notes')) {
  //     this.setState({...this.state, notes: nextProps.trackingNotes})
  //   }
  // }

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
                      this.props.track(
                        e,
                        this.props.data.providerId,
                        'applied',
                        this.state.notes
                      )
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
                        'accepted',
                        this.state.notes
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
                        'rejected',
                        this.state.notes
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

              <div className="row">
                <div className="col-12">
                  <p>Notes (optional)</p>
                  <textarea
                    rows="3"
                    id="notes"
                    className="form-control"
                    onChange={this.saveNotes}
                    placeholder="Enter titles or links to your abstracts, submission info, or feedback from the selection committee."
                    value={this.state.notes || ''}
                  />
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

  saveNotes = e => {
    this.setState({
      ...this.state,
      notes: e.target.value,
    })
  }
}

export default TrackModal
