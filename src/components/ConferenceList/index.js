import React from 'react'
import './style.scss'
import Conference from '../Conference'

class ConferenceList extends React.Component {
  render() {
    const { conferences, hideButtons, auth, abstracts } = this.props
    return (
      <ul className="list-group list-group-flush">
        {conferences.map((conference, i) => (
          <Conference
            abstracts={abstracts}
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
