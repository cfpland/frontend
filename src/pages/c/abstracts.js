import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ApiClient from '../../utilities/api-client'
import NoneFoundCard from '../../components/NoneFoundCard'
import LoadingCard from '../../components/LoadingCard'
import { withAuthentication } from '../../context/withAuthentication'
import AbstractCard from 'components/AbstractCard'
import CreateAbstractCta from 'components/CreateAbstractCta'

class Abstracts extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      abstracts: null,
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this._isMounted = true

    if (this.apiClient.isAuthenticated) {
      this.getAllAbstracts()
    } else {
      window.location.href = '/'
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location, auth } = this.props
    const title = 'Your Abstracts'
    const abstracts = this.state.abstracts

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title={title} />
        <div id="searches" className="container mt-2 mt-md-5">
          <div className="">
            <h2>Your Abstracts</h2>
          </div>
          {abstracts && abstracts.length > 0 ? (
            <ul className="list-group list-group-flush">
              {abstracts.map((abstract, i) => (
                <AbstractCard
                  key={i}
                  abstract={abstract}
                  updateAbstract={this.updateAbstract}
                  deleteAbstract={this.deleteAbstract}
                />
              ))}
            </ul>
          ) : abstracts && abstracts.length === 0 ? (
            <NoneFoundCard />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          <CreateAbstractCta auth={auth} createAbstract={this.createAbstract} />
        </div>
      </Layout>
    )
  }

  getAllAbstracts = () => {
    this.apiClient
      .getMeAbstracts()
      .then(res => {
        this.setState({
          ...this.state,
          abstracts: res.data.items,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  createAbstract = data => {
    this.apiClient
      .postMeAbstract(data)
      .then(res => {
        const abstracts = this.state.abstracts
        abstracts.push(res.data)

        this.setState({
          ...this.state,
          abstracts,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  updateAbstract = (id, data) => {
    this.apiClient
      .putMeAbstract(id, data)
      .then(res => {
        const abstracts = this.state.abstracts.map(abstract => {
          return abstract.id === id
            ? {
                ...abstract,
                ...data,
              }
            : abstract
        })

        this.setState({
          ...this.state,
          abstracts,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  deleteAbstract = id => {
    this.apiClient
      .deleteMeAbstract(id)
      .then(res => {
        const abstracts = this.state.abstracts.filter(
          abstract => abstract.id !== id
        )

        this.setState({
          ...this.state,
          abstracts,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export default withAuthentication(Abstracts)
