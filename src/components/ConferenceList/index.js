import React from 'react'
import './style.scss'
import Conference from 'templates/Conference'

class ConferenceList extends React.Component {
  render() {
    const conferences = this.props.conferences
    return (
      <ul className="list-group list-group-flush">
        {conferences.map((conference, i) => (
          <Conference data={conference.node.data} key={i} />
        ))}
      </ul>
    )
  }
}

export default ConferenceList
