import React from 'react'
import './style.scss'
import AbstractEditModal from 'components/AbstractEditModal'

const CreateAbstractCta = ({ auth, createAbstract }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title">Create New Abstract</h5>
        <p>
          Store your abstracts here to easily attach them to conferences when
          you apply.
        </p>
        <a
          href="#"
          data-toggle="modal"
          data-target="#create-abstract-modal"
          title="Create New Abstract"
          className="btn btn-success btn-block mr-2"
        >
          <i className="fa fa-plus-circle" /> Create New Abstract
        </a>
      </div>
      <AbstractEditModal
        action="create"
        modalId="create-abstract-modal"
        save={createAbstract}
      />
    </div>
  )
}

export default CreateAbstractCta
