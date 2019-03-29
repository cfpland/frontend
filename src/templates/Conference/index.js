import React from 'react'
import './style.scss'

const Conference = ({ data }) => {
  const {
    name,
    cfp_url,
    cfp_due_date,
    icon,
    location,
    category,
    is_new,
    event_start_date,
  } = data
  return (
    <li className="list-group-item list-group-item-action">
      <a href={cfp_url} target="_blank">
        {is_new ? (
          <div className="badge badge-secondary pull-right mt-2">🔔 New!</div>
        ) : (
          ''
        )}
        <h3>
          <div className="pull-left">
            {icon[0].url ? (
              <img
                src={icon[0].url}
                style={{
                  display: 'block',
                  margin: '0 1rem 0 0',
                  height: '24px',
                  width: '24px',
                }}
              />
            ) : (
              ''
            )}
          </div>
          {name}
        </h3>
        <p>
          <strong>CFPs Due:</strong>{' '}
          <time dateTime={cfp_due_date}>{cfp_due_date}</time>
        </p>
        <p>
          <strong>Conference Date:</strong>{' '}
          <time dateTime={event_start_date}>{event_start_date}</time>
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
      </a>
    </li>
  )
}

export default Conference
