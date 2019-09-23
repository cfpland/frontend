import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { withAuthentication } from '../../context/withAuthentication'
import ProfileForm from '../../components/ProfileForm'
import BillingForm from '../../components/BillingForm'
import queryString from 'querystring'
import PaymentProcessing from '../../components/PaymentProcessing'
import WelcomePro from '../../components/WelcomePro'
import { Link } from 'gatsby'

class Onboarding extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: null,
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps && nextProps.auth && nextProps.auth.isAuthenticated) {
      const query = queryString.parse(nextProps.location.search.substring(1))
      if (query && query.step) {
        this.setState({
          ...this.state,
          step: Number(query.step),
        })
      } else if (
        nextProps.auth.user &&
        nextProps.auth.user.accountLevel === 'new'
      ) {
        this.setState({
          ...this.state,
          step: 1,
        })
      }
    } else {
      window.location.href = '/'
    }
  }

  nextStep = () => {
    this.setState({
      ...this.state,
      step: this.state.step + 1,
    })
  }

  render() {
    const { location, auth } = this.props

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Sign Up" />
        <div className="container mt-3">
          <div className="account-page">
            {auth.isAuthenticated ? (
              <React.Fragment>
                <h1>Account Setup</h1>
                {this.state.step === 1 ? (
                  <>
                    <div className="alert alert-info">
                      <p>
                        <strong>Welcome to CFP Land Pro!</strong>
                      </p>

                      <p>
                        CFP Land Pro is the premier conference tracking tool for
                        professional speakers.{' '}
                        <a href="https://pro.cfpland.com/" target="_blank">
                          Click here to learn more about CFP Land Pro
                        </a>
                        , or continue the registration process below.
                      </p>
                    </div>
                    <div className="alert alert-info">
                      <strong>
                        Please tell us a little about yourself and your goals as
                        a speaker.
                      </strong>
                    </div>
                    <ProfileForm
                      auth={auth}
                      onComplete={this.nextStep}
                      saveButtonText="Save and Continue"
                    />
                    <p>
                      By completing the signup process, you agree to our{' '}
                      <Link to="/terms/" target="_blank">
                        Terms and Conditions
                      </Link>
                    </p>
                  </>
                ) : this.state.step === 2 ? (
                  <>
                    <div className="alert alert-info">
                      <strong>You're almost done!</strong> Now we just need your
                      payment information. Payments are securely handled by
                      Stripe and Moonclerk, and are 100% refundable if you're
                      not satisfied with your purchase.
                      <br />
                      <br />
                      <strong>Early adopters:</strong> Use the coupon code{' '}
                      <code>SpeakToMe2019</code> to get 50% off{' '}
                      <em>for life!</em>
                    </div>
                    <BillingForm auth={auth} />
                  </>
                ) : this.state.step === 3 ? (
                  <PaymentProcessing auth={auth} onComplete={this.nextStep} />
                ) : this.state.step === 4 ? (
                  <WelcomePro />
                ) : (
                  <p>
                    Whoops, something went wrong. Please try refreshing the page
                    or contact{' '}
                    <a href="mailto:info@cfpland.com">info@cfpland.com</a>
                    for help.
                  </p>
                )}
              </React.Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Onboarding)
