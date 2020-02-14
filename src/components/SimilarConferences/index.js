import React from 'react'
import ConferenceTitle from 'components/ConferenceTitle'
import get from 'lodash/get'
import GatsbyLink from 'gatsby-link'

class SimilarConferences extends React.Component {
  render() {
    const { data, similar } = this.props

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Similar Conferences</h5>
          <p className="card-text">
            If you're interested in speaking at {data.name}, you might also want
            to check out some of these conferences.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {similar.map((conference, i) => (
            <li className="list-group-item mb-0" key={i}>
              <GatsbyLink to={`/conferences/${conference.record_id}/`}>
                <ConferenceTitle
                  key={i}
                  iconUrl={get(conference, 'icon.0.url')}
                  name={conference.name}
                />
              </GatsbyLink>
            </li>
          ))}
          <li className="list-group-item mb-0 text-center">
            <GatsbyLink to="/conferences/">Browse All Open CFPs</GatsbyLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default SimilarConferences
