import React from 'react'
import './style.scss'
import moment from 'moment'
import GatsbyLink from 'gatsby-link'

class AbstractCard extends React.Component {
  render = () => {
    const { id, title, createdAt, description, other } = this.props.abstract
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
          </div>
          <div className="item-expand">
            <a
              href="#"
              data-toggle="modal"
              data-target={`#${modalId}`}
              title="View/Edit Abstract"
              className="btn btn-info mr-2"
            >
              View/Edit
            </a>
            <a
              href="#"
              data-toggle="modal"
              data-target={`#${modalId}`}
              title="Delete Abstract"
              className="btn btn-danger"
            >
              Delete
            </a>
          </div>
        </li>
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

  openModal = e => {
    console.log(e)
    return false
  }
}

export default AbstractCard
