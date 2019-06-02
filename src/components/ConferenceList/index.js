import React from 'react'
import './style.scss'
import Conference from '../Conference'

class ConferenceList extends React.Component {
  render() {
    const { conferences, hideButtons, auth } = this.props
    return (
      <ul className="list-group list-group-flush">
        {conferences.map((conference, i) => (
          <Conference
            data={conference}
            hideButtons={hideButtons}
            auth={auth}
            key={i}
          />
        ))}
      </ul>
    )
  }
}

export default ConferenceList
