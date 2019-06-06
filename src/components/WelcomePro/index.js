import React from 'react'
import FindMoreConferencesCta from '../FindMoreConferencesCta'

class WelcomePro extends React.Component {
  render = () => (
    <>
      <div className="alert alert-success">
        <strong>Setup complete!</strong> Check out some of our most popular
        features:
      </div>

      <h4>Save CFPs for later</h4>

      <p>
        Never forget your favorite CFP again. We'll send you reminders 21, 7,
        and 2 days before the CFP is due.
      </p>

      <h4>Track CFPs</h4>

      <p>
        Keep tabs on the CFPs you've submitted, and which ones you're committed
        to speak at. Great for monitoring or improving your acceptance rate.
      </p>

      <h4>Save Searches</h4>

      <p>
        Get alerts when new CFPs match your search options. Great if you're
        focused on one region or a specific topic area.
      </p>

      <h4>And More!</h4>

      <p>
        Discover more by exploring the app. If you have feedback, contact{' '}
        <a href="mailto:info@cfpland.com">info@cfpland.com</a> anytime!
      </p>
    </>
  )
}

export default WelcomePro
