import React from 'react'

const ConferenceTitle = ({ iconUrl, name }) => {
  return (
    <>
      <div className="pull-left">
        {iconUrl ? (
          <img
            src={iconUrl}
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
    </>
  )
}

export default ConferenceTitle
