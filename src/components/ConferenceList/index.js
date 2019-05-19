import React from 'react'
import './style.scss'
import Conference from '../Conference'

class ConferenceList extends React.Component {
  render() {
    const { conferences, hideButtons } = this.props
    return (
      <ul className="list-group list-group-flush">
        {conferences.map((conference, i) => (
          <Conference data={conference} hideButtons={hideButtons} key={i} />
        ))}
      </ul>
    )
  }
}

export default ConferenceList
