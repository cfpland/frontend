import moment from 'moment'
import React from 'react'

const CfpDate = ({ cfpDueDate }) => {
  const isClosed = moment(cfpDueDate)
    .endOf('day')
    .isBefore(moment().startOf('day'))
  return (
    <span className={isClosed ? 'text-muted' : ''}>
      <strong>CFPs {isClosed ? 'Closed' : 'Due'}:</strong>{' '}
      <time dateTime={cfpDueDate}>{cfpDueDate}</time>
    </span>
  )
}

export default CfpDate
