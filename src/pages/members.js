import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../context/withAuthentication'
import GatsbyLink from 'gatsby-link'

class Members extends React.Component {
  render() {
    const { location, auth } = this.props
    const login = e => {
      e.preventDefault()
      this.props.authClient.login()
    }
    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Pro Membership" />
        <div className="container confirm-container">
          <div className="article pr-2 pl-2 pr-md-4 pl-md-4">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <img
                  src="/img/v2/logo-lg-no-icon.png"
                  alt="CFP Land"
                  className="img-fluid"
                />
                <h1 className="mb-5 text-center">Pro Membership</h1>
              </div>
            </div>

            <h2>Why Go Pro?</h2>
            <div className="row mt-3">
              <div className="col-md-6">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>
                        🗣{' '}
                        <a href="/blog/pro-features/#early-access">
                          Early Access to Hundreds of CFPs
                        </a>
                        <br />
                        <small>
                          Access to CFPs 21 days before free subscribers.
                        </small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        ⭐️{' '}
                        <a href="/blog/pro-features/#save-cfps">
                          Never Miss Your Favorite CFP Again
                        </a>
                        <br />
                        <small>
                          Save specific conferences to get reminders when the
                          CFP is due.
                        </small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        🔍{' '}
                        <a href="/blog/pro-features/#search-alerts">
                          Custom Search Alerts
                        </a>
                        <br />
                        <small>
                          Save searches to get alerted when new CFPs match your
                          criteria.
                        </small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        ⏰{' '}
                        <a href="/blog/pro-features/#abstracts">
                          Track Applications and Abstracts
                        </a>
                        <br />
                        <small>
                          Save your abstracts and keep track of which ones you
                          submitted to each conference.
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center">
                      Individual Pricing
                    </h4>
                  </div>
                  <div className="card-body text-center">
                    <h1 className="card-title pricing-card-title mt-4 mb-5">
                      $11.50
                      <small className="text-muted"> / mo</small>
                    </h1>
                    <button
                      type="button"
                      onClick={login}
                      className="btn btn-lg btn-block btn-secondary mb-2"
                    >
                      Get started
                    </button>
                    <a
                      href="mailto:karl@cfpland.com"
                      className="text-muted small"
                    >
                      Or contact me for team pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-8 offset-md-2">
                <p>And last but not least...</p>
                <h2 className="mb-3">⛽️ Support the Project!</h2>
                <p>
                  Just a few dollars per month will help keep CFP Land running
                  for years to come.
                </p>
              </div>
            </div>

            <h2 className="mt-5">Frequenty Asked Questions</h2>
            <p>
              <strong>
                Why pay for a membership when I can get the newsletter for free?
              </strong>{' '}
              - Paying for a membership is totally optional, but it helps me
              keep the project going. Plus, members get access to our CFP
              Tracking and Alerting tool and early access to CFPs.
            </p>
            <p>
              <strong>Can I get my company to pay for it?</strong> - Probably!
              Many members can get their company to pay for it, especially if
              speaking at conferences is part of their job.
            </p>
            <p>
              <strong>Where do membership fees go?</strong> - Primarily they pay
              for hosting, email sending tools, and my time spent cleaning up
              the data. I have a full time job so it also helps keep me
              motivated to improve the project.
            </p>
            <p>
              <strong>What features are you building next?</strong> - I have a
              ton of ideas, but I try to have a phone call with all new members
              to ask them what they want to see on the platform. Your opinion
              counts for much more when you're helping fund the project.
            </p>
            <p>
              <strong>Can I get my whole team a CFP Land membership?</strong> -
              Yes! Speaking teams can get a discount on the regular monthly
              price when they add 3 or more speakers.
            </p>
            <p>
              <strong>How else can I support CFP Land?</strong> - Tell a friend,
              get your company to{' '}
              <a href="https://sponsor.cfpland.com/">sponsor a newsletter</a>,
              or <GatsbyLink to="/submit/">submit a conference</GatsbyLink> I
              don't know about.
            </p>

            <h2 className="mt-5">About Me</h2>
            <div className="row">
              <div className="col-3">
                <img
                  src="https://i.imgur.com/mBiwQYN.jpg"
                  className="img-fluid"
                  alt="Me and my dog, Chili"
                />
                <p className="text-center text-muted small">
                  Me and my dog, Chili
                </p>
              </div>
              <div className="col-9">
                <p>
                  My name is Karl, and I started CFP Land to help more
                  conference speakers get on stage. From its humble origins as a
                  simple mailing list, I am now on track to collect and share{' '}
                  <strong>over 1000 tech conference CFPs</strong> with speakers
                  on <a href="https://twitter.com/cfp_land">Twitter</a>,{' '}
                  <a href="https://www.cfpland.com/">email</a>, and{' '}
                  <a href="https://feeds.cfpland.com/v2/rss/cfps">RSS</a> for
                  free. 😁
                </p>
                <p>
                  That said, CFP Land takes a fair bit of time and money to
                  maintain. Members and sponsors help offset this cost, and
                  ensure that CFP Land will be around for many years to come. 🗓
                </p>
                <p>
                  If there's a feature that's missing or that would really set
                  this tool apart,{' '}
                  <a href="mailto:karl@cfpland.com">email me</a> 💌. I'm a real
                  person, and I want to build the best product possible for
                  speakers like you.
                </p>
              </div>
            </div>

            <div className="row mt-4 mb-3">
              <div className="col-md-6 offset-md-3 text-center">
                <button
                  type="button"
                  onClick={login}
                  className="btn btn-lg btn-block btn-secondary"
                >
                  Activate your Pro Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Members)
