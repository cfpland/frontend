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
    const regions = this.props.regions
    const categories = this.props.categories

    return (
      <div className="mb-3">
        <div className="row">
          <div className="col-12">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search open CFPs"
                aria-label="Search open CFPs"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  type="button"
                  data-toggle="collapse"
                  data-target="#filterCollapse"
                  aria-expanded="false"
                  aria-controls="filterCollapse"
                >
                  <span className="d-none d-md-inline mr-2">Filters</span>
                  <i className="fa fa-filter" aria-label="Filter CFPs" />
                </button>
              </div>
            </div>
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
                <label htmlFor="eventStartDates">Event Start Date</label>
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

            <div className="row">
              <div className="col">
                <label htmlFor="perks">Perks</label>
              </div>
            </div>
            <div id="perks" className="row">
              <div className="col-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="hotel_covered"
                    name="hotel_covered"
                    checked={!!this.state.query.hotel_covered}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="hotel_covered"
                    className="form-check-label small"
                  >
                    Hotel
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="travel_covered"
                    name="travel_covered"
                    checked={!!this.state.query.travel_covered}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="travel_covered"
                    className="form-check-label small"
                  >
                    Travel
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stipend_covered"
                    name="stipend_covered"
                    checked={!!this.state.query.stipend_covered}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="stipend_covered"
                    className="form-check-label small"
                  >
                    Stipend
                  </label>
                </div>
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
