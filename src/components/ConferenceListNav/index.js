import React from 'react'
import './style.scss'
import { Link } from 'gatsby'
import queryString from 'query-string'

class ConferenceListNav extends React.Component {
  render() {
    const regions = this.props.regions
    const categories = this.props.categories
    this.query = queryString.parse(this.props.location.search)
    const categoryDropdownLinkText = this.getCategoryDropdownLinkText(
      categories
    )
    const regionDropdownLinkText = this.getRegionDropdownLinkText(regions)

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
        <div className="card bg-light collapse" id="filterCollapse">
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="category">Category</label>
                <select
                  className="custom-select custom-select-sm"
                  id="category"
                >
                  <option />
                  {categories.map((category, k) => (
                    <option key={k}>{category.node.data.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-6">
                <label htmlFor="region">Region</label>
                <select className="custom-select custom-select-sm" id="region">
                  <option />
                  {regions.map((region, k) => (
                    <option key={k}>{region.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="eventStartDates">Event Starts</label>
              </div>
            </div>
            <div id="eventStartDates" className="form-row">
              <div className="form-group col-6">
                <label htmlFor="dueAfter" className="small">
                  After
                </label>
                <input
                  className="form-control form-control-sm"
                  type="date"
                  id="dueAfter"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="dueBefore" className="small">
                  Before
                </label>
                <input
                  className="form-control form-control-sm"
                  type="date"
                  id="dueBefore"
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
                    id="hotel"
                  />
                  <label htmlFor="hotel" className="form-check-label small">
                    Hotel
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="travel"
                  />
                  <label htmlFor="travel" className="form-check-label small">
                    Travel
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stipend"
                  />
                  <label htmlFor="stipend" className="form-check-label small">
                    Stipend
                  </label>
                </div>
              </div>
            </div>

            <ul className="nav nav-pills d-none">
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Filters:
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {categoryDropdownLinkText}
                </a>
                <div className="dropdown-menu">
                  <Link
                    to={this.getCategoryLink()}
                    className={
                      !this.query.category
                        ? 'dropdown-item active'
                        : 'dropdown-item'
                    }
                  >
                    All
                  </Link>
                  {categories.map((category, k) => (
                    <Link
                      key={k}
                      to={this.getCategoryLink(category)}
                      className={
                        this.query.category ===
                        category.node.data.name.toLowerCase()
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                    >
                      {category.node.data.name}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {regionDropdownLinkText}
                </a>
                <div className="dropdown-menu">
                  <Link
                    to={this.getRegionLink()}
                    className={
                      !this.query.region
                        ? 'dropdown-item active'
                        : 'dropdown-item'
                    }
                  >
                    All
                  </Link>
                  {regions.map((region, i) => (
                    <Link
                      key={i}
                      to={this.getRegionLink(region)}
                      className={
                        this.query.region === region.slug
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                    >
                      {region.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  getCategoryLink(category) {
    const query = { ...this.query }
    query.category = category ? category.node.data.name.toLowerCase() : ''
    return this.props.location.pathname + '?' + queryString.stringify(query)
  }

  getRegionLink(region) {
    const query = { ...this.query }
    query.region = region ? region.slug : ''
    return this.props.location.pathname + '?' + queryString.stringify(query)
  }

  getCategoryDropdownLinkText(categories) {
    const selectedCategory = categories.find(category => {
      return (
        this.query.category &&
        category.node.data.name.toLowerCase() === this.query.category
      )
    })

    return selectedCategory ? selectedCategory.node.data.name : 'Category'
  }

  getRegionDropdownLinkText(regions) {
    const selectedRegion = regions.find(region => {
      return this.query.region && region.slug === this.query.region
    })

    return selectedRegion ? selectedRegion.name : 'Region'
  }
}

export default ConferenceListNav
