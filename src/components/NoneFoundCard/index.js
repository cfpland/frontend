import React from 'react'
import './style.scss'

const NoneFoundCard = props => (
  <div className="card bg-light mb-2 none-found-card">
    <div className="card-body">
      <h5 className="card-title">Nothing Here Yet</h5>
      <p>{props.notFoundText || '[ ]'}</p>
    </div>
  </div>
)

export default NoneFoundCard
