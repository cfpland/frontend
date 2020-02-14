import React from 'react'
import ConferenceTitle from 'components/ConferenceTitle'
import get from 'lodash/get'
import GatsbyLink from 'gatsby-link'

class SimilarConferences extends React.Component {
  render() {
    const { data, auth } = this.props
    const similar = [{}, {}, {}]
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Similar Conferences</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {similar.map((conference, i) => (
            <li className="list-group-item mb-0" key={i}>
              <GatsbyLink to={`/conferences/`}>
                <ConferenceTitle
                  iconUrl={get(data, 'icon.0.url')}
                  name={`Similar Conference ${i}`}
                />
              </GatsbyLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SimilarConferences
