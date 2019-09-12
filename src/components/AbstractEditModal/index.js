import React from 'react'
import './style.scss'
import { get } from 'lodash'

class AbstractEditModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: get(props, 'data.title', null),
      description: get(props, 'data.description', null),
      other: get(props, 'data.other', null),
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      ...this.state,
      title: get(nextProps, 'data.title', null),
      description: get(nextProps, 'data.description', null),
      other: get(nextProps, 'data.other', null),
    })
  }

  render = () => {
    return (
      <div
        className="modal fade"
        id={this.props.modalId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="abstractEditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="abstractEditModalLabel">
                {this.props.action === 'edit'
                  ? 'Edit Abstract'
                  : 'Create Abstract'}
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
              <div className="row mb-3">
                <div className="col-12">
                  {this.props.action === 'create' ? (
                    <p className="alert alert-info">
                      An abstract is a brief pitch of the presentation you want
                      to deliver at a conference. In addition to informing the
                      reader about your topic, it should drive home your
                      expertise in the area and capture their attention.
                    </p>
                  ) : (
                    ''
                  )}
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    onChange={e => this.saveField('title', e.target.value)}
                    placeholder="An Eye-Catching Title"
                    value={this.state.title || ''}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows="3"
                    id="description"
                    className="form-control"
                    onChange={e =>
                      this.saveField('description', e.target.value)
                    }
                    placeholder="A longer description of your abstract. Many conferences request 1-3 paragraphs of detail."
                    value={this.state.description || ''}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="other">Other (optional)</label>
                  <textarea
                    rows="3"
                    id="other"
                    className="form-control"
                    onChange={e => this.saveField('other', e.target.value)}
                    placeholder="Other information, supporting blog posts, or recordings of your talk in action. These can help bolster your chances with the selection committee."
                    value={this.state.other || ''}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  {this.formValid() ? (
                    <button
                      className="btn btn-block btn-success"
                      onClick={e => this.props.save(this.state)}
                      data-dismiss="modal"
                    >
                      Save
                    </button>
                  ) : (
                    <button className="btn btn-success disabled">Save</button>
                  )}
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-block btn-outline-primary ml-2"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  formValid = () => this.state.title && this.state.description

  saveField = (field, value) => {
    this.state[field] = value
    this.setState({
      ...this.state,
    })
  }
}

export default AbstractEditModal
