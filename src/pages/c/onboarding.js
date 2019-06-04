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
                      <strong>Welcome to CFP Land Pro!</strong> Please tell us a
                      little about yourself and your goals as a speaker.
                    </div>
                    <ProfileForm
                      auth={auth}
                      onComplete={this.nextStep}
                      saveButtonText="Save and Continue"
                    />
                  </>
                ) : this.state.step === 2 ? (
                  <>
                    <div className="alert alert-info">
                      <strong>You're almost done!</strong> Now we just need your
                      payment information. Payments are securely handled by
                      Stripe and Moonclerk, and are 100% refundable if you're
                      not satisfied with your purchase.
                    </div>
                    <BillingForm auth={auth} />
                  </>
                ) : this.state.step === 3 ? (
                  <PaymentProcessing auth={auth} onComplete={this.nextStep} />
                ) : this.state.step === 4 ? (
                  <WelcomePro />
                ) : (
                  <p>
                    Whoops, something went wrong. Please try refreshing the
                    page.
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
