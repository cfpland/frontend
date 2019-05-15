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
      <ul className="nav nav-pills">
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
                !this.query.category ? 'dropdown-item active' : 'dropdown-item'
              }
            >
              All
            </Link>
            {categories.map((category, k) => (
              <Link
                key={k}
                to={this.getCategoryLink(category)}
                className={
                  this.query.category === category.node.data.name.toLowerCase()
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
                !this.query.region ? 'dropdown-item active' : 'dropdown-item'
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
    )
  }

  getCategoryLink(category) {
    const query = { ...this.query }
    query.category = category ? category.node.data.name.toLowerCase() : ''
    return '/conferences/?' + queryString.stringify(query)
  }

  getRegionLink(region) {
    const query = { ...this.query }
    query.region = region ? region.slug : ''
    return '/conferences/?' + queryString.stringify(query)
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
