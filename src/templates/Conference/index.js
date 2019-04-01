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
  console.log(category)
  return (
    <li className="list-group-item list-group-item-action">
      <a href={cfp_url} target="_blank">
        {categoryBadge(category)}
        {newBadge(is_new)}
        <h3>
          <div className="pull-left">
            {icon && icon[0] && icon[0].url ? (
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
          <strong>Perks:</strong> Travel, Hotel, and Stipend
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

function newBadge(is_new) {
  return is_new ? (
    <div className="badge badge-primary pull-right p-2 mt-2">🔔 New!</div>
  ) : (
    ''
  )
}

function categoryBadge(category) {
  return category &&
    category[0] &&
    category[0].data &&
    category[0].data.name ? (
    <div className="badge badge-secondary pull-right p-2 mt-2 ml-2">
      #{category[0].data.name}
    </div>
  ) : (
    ''
  )
}

export default Conference
