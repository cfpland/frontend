import React from 'react'
import './style.scss'
import queryString from 'query-string'
import { navigate } from 'gatsby'

class ConferenceListNav extends React.Component {
  constructor(props) {
    super(props)
    const query = queryString.parse(props.location.search)

    this.state = { query }
  }

  handleChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    const query = {
      ...this.state.query,
      [event.target.name]: value,
    }

    // Filter out false values
    if (value === false) {
      delete query[event.target.name]
    }

    this.setState({
      ...this.state,
      query,
    })

    navigate(this.props.location.pathname + '?' + queryString.stringify(query))
  }

  render() {
    const { regions, categories } = this.props

    return (
      <div className="mb-3">
        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-info btn-block dropdown-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#filterCollapse"
              aria-expanded="false"
              aria-controls="filterCollapse"
            >
              <span className="mr-2">Filters</span>
              <i className="fa fa-filter" aria-label="Filter CFPs" />
            </button>
          </div>
        </div>
        <div
          className="card bg-light collapse filters-menu"
          id="filterCollapse"
        >
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="category">Category</label>
                <select
                  className="custom-select custom-select-sm"
                  id="category"
                  name="category"
                  value={this.state.query.category || ''}
                  onChange={this.handleChange}
                >
                  <option />
                  {categories.map((category, k) => (
                    <option
                      key={k}
                      value={category.node.data.name.toLowerCase()}
                    >
                      {category.node.data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-6">
                <label htmlFor="region">Region</label>
                <select
                  className="custom-select custom-select-sm"
                  id="region"
                  name="region"
                  value={this.state.query.region || ''}
                  onChange={this.handleChange}
                >
                  <option />
                  {regions.map((region, k) => (
                    <option key={k} value={region.name.toLowerCase()}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="eventStartDates">Conference Start Date</label>
              </div>
            </div>
            <div id="eventStartDates" className="form-row">
              <div className="form-group col-6">
                <label htmlFor="event_start_date_after" className="small">
                  After
                </label>
                <input
                  className="form-control form-control-sm"
                  type="date"
                  id="event_start_date_after"
                  name="event_start_date_after"
                  value={this.state.query.event_start_date_after || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="event_start_date_before" className="small">
                  Before
                </label>
                <input
                  className="form-control form-control-sm"
                  type="date"
                  id="event_start_date_before"
                  name="event_start_date_before"
                  value={this.state.query.event_start_date_before || ''}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <a
                  href="#"
                  className="small pull-right text-danger"
                  onClick={this.resetQuery}
                >
                  Reset Filters
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  resetQuery = e => {
    e.preventDefault()
    this.setState({ ...this.state, query: {} })
    navigate(this.props.location.pathname)
  }
}

export default ConferenceListNav
