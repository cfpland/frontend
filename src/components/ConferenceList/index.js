import React from 'react'
import './style.scss'
import Conference from 'components/Conference'

class ConferenceList extends React.Component {
  render() {
    const conferences = this.props.conferences
    const hideButtons = this.props.hideButtons || false
    return (
      <ul className="list-group list-group-flush">
        {conferences.map((conference, i) => (
          <Conference
            data={conference.node.data}
            hideButtons={hideButtons}
            key={i}
          />
        ))}
      </ul>
    )
  }
}

export default ConferenceList
