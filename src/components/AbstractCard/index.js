import React from 'react'
import './style.scss'
import moment from 'moment'
import AbstractEditModal from 'components/AbstractEditModal'

class AbstractCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      abstract: props.abstract,
      expanded: false,
      confirmDelete: false,
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      ...this.state,
      abstract: nextProps.abstract,
    })
  }

  render = () => {
    const { id, title, createdAt, description, other } = this.state.abstract
    const modalId = `abstract_${id}`

    return (
      <>
        <li className="abstract-card list-group-item">
          <div className="mt-1 item-content">
            <h3>{title}</h3>
            <p>
              <strong>Created: </strong>
              {moment(createdAt).format('LL')}
            </p>
            {this.state.expanded ? (
              <>
                <p>
                  <strong>Description: </strong>
                  {this.nl2br(description)}
                </p>
                {other ? (
                  <p>
                    <strong>Other: </strong>
                    {this.nl2br(other)}
                  </p>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )}
          </div>
          <div className="item-expand">
            <a
              href="#"
              onClick={this.expandAbstract}
              title="Show the entire Abstract"
              className="btn btn-outline-info mr-2"
            >
              {this.state.expanded ? 'Show Less' : 'Show More'}
            </a>
            <a
              href="#"
              data-toggle="modal"
              data-target={`#${modalId}`}
              title="Edit Abstract"
              className="btn btn-success mr-2"
            >
              <i className="fa fa-edit mr-2" />
              Edit
            </a>
            {this.state.confirmDelete ? (
              <button
                onClick={this.reallyDelete}
                title="Delete Abstract"
                className="btn btn-outline-danger"
              >
                Are You Sure?
              </button>
            ) : (
              <button
                onClick={this.enableConfirmDelete}
                title="Delete Abstract"
                className="btn btn-danger"
              >
                <i className="fa fa-remove mr-2" />
                Delete
              </button>
            )}
          </div>
        </li>
        <AbstractEditModal
          action="edit"
          modalId={modalId}
          save={data => this.props.updateAbstract(this.state.abstract.id, data)}
          data={this.state.abstract}
        />
      </>
    )
  }

  nl2br = text =>
    text.split('\n').map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      )
    })

  enableConfirmDelete = e => {
    this.setState({
      ...this.state,
      confirmDelete: true,
    })
  }

  reallyDelete = e => {
    this.props.deleteAbstract(this.state.abstract.id)
    this.setState({
      ...this.state,
      confirmDelete: false,
    })
  }

  expandAbstract = e => {
    e.preventDefault()

    this.setState({
      ...this.state,
      expanded: !this.state.expanded,
    })

    return false
  }
}

export default AbstractCard
