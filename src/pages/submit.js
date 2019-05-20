import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'

class Submit extends React.Component {
  render() {
    const height = 700
    const { location } = this.props
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Submit" />
        <div className="container mt-3">
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrzDoyJaRAN6HPS9?backgroundColor=cyan"
            frameBorder="0"
            onmousewheel=""
            width="100%"
            height={height}
          />
        </div>
      </Layout>
    )
  }
}

export default Submit
