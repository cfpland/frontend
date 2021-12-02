import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class WelcomePro extends React.Component {
  render = () => (
    <>
      <div className="alert alert-success">
        <strong>Setup complete!</strong> Now that your Pro account is active,
        learn how CFP Land can help you reach your speaking goals faster, or
        skip this intro and start looking for your next conference to speak at.
        <div className="text-center mt-3 mb-2">
          <Link className="btn btn-success" to="/c/all/">
            Start Browsing Open CFPs
          </Link>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-8">
          <h4 className="mt-4">1. Save CFPs for later</h4>
          <p>
            Never forget your favorite CFP again. We'll send you{' '}
            <strong>reminders 21, 7, and 2 days before the CFP is due</strong>.
          </p>
        </div>
        <div className="col-md-4">
          <div className="img-container">
            <img
              alt="Save CFPs to get reminders before they are due."
              src="https://i.imgur.com/I0o4DBA.png"
            />
            <a
              href="#"
              data-toggle="modal"
              data-target="#savedCfpModal"
              title="Expand image"
              className="bottom-right bg-dark text-white"
            >
              <i className="fa fa-search-plus" />
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="savedCfpModal"
          id="savedCfpModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Save CFPs for later</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img
                alt="Save CFPs to get reminders before they are due."
                src="https://i.imgur.com/I0o4DBA.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4 className="mt-4">2. Browse CFPs weeks before free subscribers</h4>
          <p>
            Pro users can view all open CFPs{' '}
            <strong>21 days before they are available to the public</strong>.
            Apply early to make sure your application gets a fair shot.
          </p>
        </div>
        <div className="col-md-4">
          <div className="img-container">
            <img
              alt="See CFPs 21 days before free users."
              src="https://i.imgur.com/kMhsxzV.gif"
            />
            <a
              href="#"
              data-toggle="modal"
              data-target="#browseCfpsModal"
              title="Expand image"
              className="bottom-right bg-dark text-white"
            >
              <i className="fa fa-search-plus" />
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="browseCfpsModal"
          id="browseCfpsModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Browse CFPs weeks before free subscribers
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img
                alt="See CFPs 21 days before free users."
                src="https://i.imgur.com/kMhsxzV.gif"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4 className="mt-4">3. Track Your CFPs</h4>
          <p>
            <strong>Keep tabs on the CFPs you've submitted</strong>, and which
            conferences you're committed to speak at. Monitor and improve your
            acceptance rate through weekly email reports.
          </p>
        </div>
        <div className="col-md-4">
          <div className="img-container">
            <img
              alt="Track CFPs you've applied to and been accepted at."
              src="https://i.imgur.com/cwOSkNC.gif"
            />
            <a
              href="#"
              data-toggle="modal"
              data-target="#trackCfpsModal"
              title="Expand image"
              className="bottom-right bg-dark text-white"
            >
              <i className="fa fa-search-plus" />
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="trackCfpsModal"
          id="trackCfpsModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Track Your CFPs</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img
                alt="Track CFPs you've applied to and been accepted at."
                src="https://i.imgur.com/cwOSkNC.gif"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4 className="mt-4">4. Save Searches</h4>
          <p>
            Get{' '}
            <strong>
              notified when new CFPs match your saved search options
            </strong>
            . Great if you're focused on one region or a specific topic area.
          </p>
        </div>
        <div className="col-md-4">
          <div className="img-container">
            <img
              alt="Save Searches to get notifications when new CFPs become available."
              src="https://i.imgur.com/FAkF4TN.png"
            />
            <a
              href="#"
              data-toggle="modal"
              data-target="#saveSearchModal"
              title="Expand image"
              className="bottom-right bg-dark text-white"
            >
              <i className="fa fa-search-plus" />
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="saveSearchModal"
          id="saveSearchModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Save Searches</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img
                alt="Save Searches to get notifications when new CFPs become available."
                src="https://i.imgur.com/FAkF4TN.png"
              />
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-3">And More!</h4>

      <p>
        Discover more by exploring the app. If you have feedback, contact{' '}
        <a href="mailto:info@cfpland.com">info@cfpland.com</a> anytime!
      </p>

      <div className="text-center">
        <Link className="btn btn-lg btn-success" to="/c/all/">
          Start Browsing Open CFPs
        </Link>
      </div>
    </>
  )
}

export default WelcomePro
