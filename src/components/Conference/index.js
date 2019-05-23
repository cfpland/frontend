import React from 'react'
import './style.scss'
import { Link } from '@reach/router'
import ConferenceButtonGroup from '../ConferenceButtonGroup'

const Conference = ({ data, hideButtons }) => {
  const {
    name,
    cfp_url,
    cfp_due_date,
    icon,
    location,
    category,
    is_new,
    event_start_date,
    isSaved,
  } = data
  return (
    <li className="list-group-item">
      <div className="mt-1">
        {categoryBadge(category)}
        {newBadge(is_new)}
        <a href={cfp_url} target="_blank">
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
        </a>
        <p>
          <strong>CFPs Due:</strong>{' '}
          <time dateTime={cfp_due_date}>{cfp_due_date}</time>
        </p>
        <p>
          <strong>Perks:</strong> {perksList(data)}
        </p>
        <p>
          <strong>Conference Date:</strong>{' '}
          <time dateTime={event_start_date}>{event_start_date}</time>
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        {hideButtons ? '' : <ConferenceButtonGroup data={data} />}
      </div>
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
  return category ? (
    <Link
      className="badge badge-secondary pull-right p-2 mt-2 ml-2"
      to={`/conferences/${category.toLowerCase()}`}
    >
      #{category}
    </Link>
  ) : (
    ''
  )
}

function perksList(data) {
  let result = ''
  if (data.perks_checked) {
    if (data.travel_covered) {
      result += 'Travel, '
    }
    if (data.hotel_covered) {
      result += 'Hotel, '
    }
    if (data.stipend_covered) {
      result += 'Stipend, '
    }
    if (result.length < 2) {
      result = 'None'
    } else {
      result = result.substring(0, result.length - 2)
    }
  } else {
    result = '❓'
  }

  return result
}

export default Conference
