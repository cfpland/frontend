import React from 'react'
import './style.scss'
import { cleanNullValues } from 'utilities/clean-null-values'
import { statuses } from 'utilities/statuses'
import LoadingCard from '../../components/LoadingCard'
import ApiClient from '../../utilities/api-client'
import get from 'lodash/get'
import { Link } from 'gatsby'

class PaymentProcessing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: statuses.LOADING,
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this.getPaymentStatus()
  }

  render = () => (
    <div>
      {this.state.status === statuses.LOADING ? (
        <>
          <div className="alert alert-info">
            <strong>Your payment is being processed.</strong> Please do not
            refresh this page or navigate away.
          </div>
          <LoadingCard />
        </>
      ) : this.state.status === statuses.ERROR ? (
        <div className="alert alert-danger">
          <strong>Whoops, something went wrong.</strong> Try refreshing this
          page or contacting{' '}
          <a href="mailto:info@cfpland.com">info@cfpland.com</a> for support.
        </div>
      ) : (
        <div className="alert alert-success">
          <strong>Payment confirmed!</strong> You should be redirected to the
          welcome page. If not <Link to="/c/onboarding?step=4">click here</Link>
          .
        </div>
      )}
    </div>
  )

  getPaymentStatus = () => {
    this.apiClient
      .getMePayment()
      .then(res => {
        if (get(res.data, 'subscription.status') === 'active') {
          this.setState({
            ...this.state,
            status: statuses.SAVED,
          })
          if (this.props.onComplete) {
            this.props.onComplete()
          }
        } else {
          setTimeout(this.getPaymentStatus, 2000)
        }
      })
      .catch(e =>
        this.setState({
          ...this.state,
          status: statuses.ERROR,
        })
      )
  }
}

export default PaymentProcessing
