import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class TrackModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: props.data.trackingNotes,
      abstracts: props.data.abstracts.map(abstract => ({ id: abstract.id })),
    }
  }

  saveAbstract = e => {
    let abstracts = [...this.state.abstracts]
    if (e.target.checked === true) {
      abstracts.push({ id: e.target.name })
    } else {
      abstracts = abstracts.filter(abstract => abstract.id !== e.target.name)
    }

    this.setState({
      ...this.state,
      abstracts,
    })
  }

  saveNotes = e => {
    this.setState({
      ...this.state,
      notes: e.target.value,
    })
  }

  render = () => {
    return (
      <div
        className="modal fade"
        id={this.props.modalId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="trackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="trackModalLabel">
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
              <div className="row">
                <div className="col-12">
                  <label>Which Abstract(s) did you submit? (optional)</label>
                  {this.props.abstracts && this.props.abstracts.data
                    ? this.props.abstracts.data.map(abstract => (
                        <div className="form-check" key={abstract.id}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name={abstract.id}
                            id={this.props.modalId + '-' + abstract.id}
                            checked={this.isAbstractSelected(abstract.id)}
                            onChange={this.saveAbstract}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={this.props.modalId + '-' + abstract.id}
                          >
                            {abstract.title}
                          </label>
                        </div>
                      ))
                    : ''}
                  <p className="text-sm-right text-right">
                    <Link onClick={this.goToAbstracts} to="/c/abstracts/">
                      Create a new abstract
                    </Link>
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="notes">Notes (optional)</label>
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

              <label>What's the status of your application?</label>

              <div className="row mt-2 mb-3">
                <div className="col-4">
                  <button
                    type="button"
                    className={
                      this.props.data.trackingStatus === 'applied'
                        ? 'btn btn-info btn-block'
                        : 'btn btn-outline-info btn-block'
                    }
                    onClick={e =>
                      this.props.track(e, this.props.data.providerId, {
                        status: 'applied',
                        notes: this.state.notes,
                        abstracts: this.state.abstracts,
                      })
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
                      this.props.track(e, this.props.data.providerId, {
                        status: 'accepted',
                        notes: this.state.notes,
                        abstracts: this.state.abstracts,
                      })
                    }
                  >
                    <div>
                      <i className="fa fa-check" />
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
                      this.props.track(e, this.props.data.providerId, {
                        status: 'rejected',
                        notes: this.state.notes,
                        abstracts: this.state.abstracts,
                      })
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

  goToAbstracts = e => {
    window.$(this.props.modalId).modal('hide')
    window.$('.modal-backdrop').remove()
  }

  isAbstractSelected = abstractId =>
    !!this.state.abstracts.find(abstract => abstract.id === abstractId)
}

export default TrackModal
