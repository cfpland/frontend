import React from 'react'
import ConferenceTitle from 'components/ConferenceTitle'
import get from 'lodash/get'
import GatsbyLink from 'gatsby-link'
import CfpDate from 'components/CfpDate'

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
            <GatsbyLink key={i} to={`/conferences/${conference.record_id}/`}>
              <li
                className="list-group-item list-group-item-action mb-0"
                key={i}
              >
                <ConferenceTitle
                  iconUrl={get(conference, 'icon.0.url')}
                  name={conference.name}
                />
                <p className="mt-2">
                  <CfpDate cfpDueDate={conference.cfp_due_date} />
                </p>
              </li>
            </GatsbyLink>
          ))}
          <li className="list-group-item list-group-item-action mb-0 text-center">
            <GatsbyLink to="/conferences/">Browse All Open CFPs</GatsbyLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default SimilarConferences
