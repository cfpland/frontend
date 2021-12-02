import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../context/withAuthentication'
import GatsbyLink from 'gatsby-link'

class Submit extends React.Component {
  render() {
    const { location, auth } = this.props
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Subscription Confirmed" />
        <div className="container confirm-container">
          <div className="article pr-2 pl-2 pr-md-4 pl-md-4">
            <h1 className="mb-4"> 📬 Subscription Confirmed!</h1>
            <p>
              Your subscription to CFP Land has been confirmed. Every week, I'll
              deliver a fresh batch of Calls for Proposals right in your inbox.
            </p>
            <h2 className="mt-5">What's Next?</h2>
            <h3 className="mt-3">1. Set your preferences</h3>
            <p>
              With dozens of new CFPs added every week, there's a possibility
              that one you'd like won't make it into the newsletter. If you{' '}
              <a
                href="https://cfpland.us15.list-manage.com/profile?u=4eba8b205fc13380cd3e6f3fc&id=258f553f4e"
                className="font-weight-bold"
              >
                set a preferred category or region in your preferences
              </a>
              , I'll make sure those conferences are at the top of your list.
            </p>
            <p className="text-center">
              <a
                href="https://cfpland.us15.list-manage.com/profile?u=4eba8b205fc13380cd3e6f3fc&id=258f553f4e"
                className="btn btn-secondary"
              >
                Update your preferences
              </a>
            </p>

            <h3 className="mt-4">2. Explore CFP Land</h3>
            <ul>
              <li>
                Get the{' '}
                <a href="/guides/speaking/">
                  Comprehensive Guide to Speaking at Tech Conferences
                </a>{' '}
                - 17,000+ words of advice from dozens of conference speakers 📖
              </li>
              <li>
                Follow <a href="https://www.twitter.com/cfp_land">@cfp_land</a>{' '}
                on Twitter 🐦
              </li>
              <li>
                <a href="/submit/">Submit your own conference</a> ➕
              </li>
              <li>
                Read <a href="/blog/">weekly Speaker Stories</a> on the blog 👩🏽‍🏫
              </li>
              <li>
                Use{' '}
                <a href="https://cfpland.github.io/api-docs/">our free API</a>{' '}
                to build something cool ⚙️
              </li>
              <li>
                Check out the <a href="/conferences/">Calls for Proposals</a>{' '}
                that are open now 📢
              </li>
            </ul>

            <h3 className="mt-4">3. Support the project</h3>
            <p>
              Do you really love CFP Land? Want to support the project with a
              financial commitment?
            </p>
            <p className="text-center">
              <a href="/submit/" className="btn btn-outline-primary mr-2">
                Submit a sponsored CFP
              </a>
              .
            </p>
            <p>
              I started this project because I love speaking, and I want to help
              more people in tech get on stage. Your financial support helps pay
              for hosting, email services, and content that reaches thousands of
              tech conference speakers. A little contribution goes a long way
              towards keeping the project going!
              <br />
              <br />- Karl from CFP Land
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Submit)
