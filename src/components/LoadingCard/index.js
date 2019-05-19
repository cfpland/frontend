import React from 'react'
import './style.scss'

const LoadingCard = () => (
  <div className="card bg-light mb-2 loading-card">
    <div className="card-body">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
      <h5 className="card-title">Loading</h5>
    </div>
  </div>
)

export default LoadingCard
