import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import NoneFoundCard from '../../components/NoneFoundCard'
import LoadingCard from '../../components/LoadingCard'
import AbstractCard from 'components/AbstractCard'
import CreateAbstractCta from 'components/CreateAbstractCta'
import { withAbstracts } from '../../context/withAbstracts'
import { withAuthentication } from '../../context/withAuthentication'

class Abstracts extends React.Component {
  render = () => {
    const title = 'Your Abstracts'
    const { location, auth, abstracts } = this.props

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title={title} />
        <div id="searches" className="container mt-2 mt-md-5">
          <div className="">
            <h2>Your Abstracts</h2>
          </div>
          {abstracts && abstracts.data && abstracts.data.length > 0 ? (
            <ul className="list-group list-group-flush">
              {abstracts.data.map((abstract, i) => (
                <AbstractCard
                  key={i}
                  abstract={abstract}
                  updateAbstract={abstracts.updateAbstract}
                  deleteAbstract={abstracts.deleteAbstract}
                />
              ))}
            </ul>
          ) : abstracts && abstracts.data && abstracts.data.length === 0 ? (
            <NoneFoundCard />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          <CreateAbstractCta
            auth={auth}
            createAbstract={abstracts.createAbstract}
          />
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(withAbstracts(Abstracts))
