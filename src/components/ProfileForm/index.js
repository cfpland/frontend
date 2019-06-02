import React from 'react'
import './style.scss'
import ApiClient from 'utilities/api-client'
import { cleanNullValues } from 'utilities/clean-null-values'
import { statuses } from 'utilities/statuses'

const speakingGoalOptions = [
  'Speak at my first conference',
  'Speak at more conferences',
  'Raise my acceptance rate',
  'Speak internationally',
  'Get a keynote speaking slot',
  'Meet my quota for work',
]

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: statuses.READY,
      account: {
        email: '',
        firstName: '',
        lastName: '',
        location: '',
        speakingGoal: '',
        speakingGoalSelected: '',
      },
    }

    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this.setState({ ...this.state, status: statuses.LOADING })
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      account: {
        ...this.state.account,
        [event.target.name]: event.target.value,
      },
    })
  }

  handleSelectedSpeakingGoalChange = event => {
    const speakingGoal = speakingGoalOptions.includes(event.target.value)
      ? event.target.value
      : ''
    this.setState({
      ...this.state,
      account: {
        ...this.state.account,
        speakingGoal,
        speakingGoalSelected: event.target.value,
      },
    })
  }

  handleSubmit = event => {
    this.setState({ ...this.state, status: statuses.SAVING })
    event.preventDefault()

    this.apiClient
      .patchMe(this.state.account)
      .then(res => {
        this.setState({
          ...this.state,
          status: statuses.SAVED,
        })
      })
      .catch(error => {
        console.error(error.message)
        this.setState({ ...this.state, status: statuses.ERROR })
      })
  }

  componentWillReceiveProps = (nextProps, nextContext) => {
    if (nextProps && nextProps.auth && nextProps.auth.user) {
      const data = cleanNullValues(nextProps.auth.user)

      this.setState({
        ...this.state,
        account: {
          ...this.state.account,
          ...data,
          speakingGoalSelected: !data.speakingGoal
            ? data.speakingGoal
            : speakingGoalOptions.includes(data.speakingGoal)
            ? data.speakingGoal
            : 'Other',
        },
        status: statuses.READY,
      })
    }
  }

  render = () => (
    <form className="row account-form" onSubmit={this.handleSubmit}>
      <div className="col-12">
        <label htmlFor="emailInput">Email Address</label>
        <input
          name="email"
          type="email"
          className="form-control mb-3"
          id="emailInput"
          placeholder="Your email"
          value={this.state.account.email || ''}
          disabled
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="first_name">First Name</label>
        <input
          name="firstName"
          type="text"
          className="form-control mb-3"
          id="firstName"
          placeholder="First name"
          value={this.state.account.firstName || ''}
          onChange={this.handleChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="last_name">Last Name</label>
        <input
          name="lastName"
          type="text"
          className="form-control mb-3"
          id="lastName"
          placeholder="Last name"
          value={this.state.account.lastName || ''}
          onChange={this.handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="location">Location</label>
        <input
          name="location"
          type="text"
          className="form-control mb-3"
          id="location"
          placeholder="City, Country"
          value={this.state.account.location || ''}
          onChange={this.handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="speakingGoal">
          What is your primary goal as a speaker?{' '}
          <span className="small text-muted">
            This helps us align the product experience with your goals.
          </span>
        </label>
        <select
          className="custom-select mb-3"
          id="speakingGoalSelected"
          name="speakingGoalSelected"
          value={this.state.account.speakingGoalSelected || ''}
          onChange={this.handleSelectedSpeakingGoalChange}
        >
          <option value=""> </option>
          {speakingGoalOptions.map((goalOption, i) => (
            <option key={i} value={goalOption}>
              {goalOption}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {this.state.account.speakingGoalSelected === 'Other' ? (
          <input
            name="speakingGoal"
            type="text"
            className="form-control mb-3"
            id="speakingGoal"
            placeholder="Be specific, eg: 'Speak at 10 new conferences this year.'"
            value={this.state.account.speakingGoal || ''}
            onChange={this.handleChange}
          />
        ) : (
          ''
        )}
      </div>
      <div className="col-12">
        <input
          type="submit"
          value="Save"
          className="btn btn-success btn-block mb-3"
        />
      </div>
      <div className="col-12">
        {this.state.status === statuses.ERROR ? (
          <div className="alert alert-danger">
            <strong>Whoops! Something went wrong.</strong> Check the console to
            learn more or contact support for help.
          </div>
        ) : (
          ''
        )}
        {this.state.status === statuses.SAVED ? (
          <div className="alert alert-success">
            <strong>Account saved!</strong> You can now carry on with your day.
          </div>
        ) : (
          ''
        )}
      </div>
    </form>
  )
}

export default ProfileForm
