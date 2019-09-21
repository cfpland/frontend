import React from 'react'

export function withSearches(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null,
        unsaveSearch: this.unsaveSearch,
      }
    }

    componentWillReceiveProps = nextProps => {
      this.apiClient = nextProps.apiClient
      this.auth = nextProps.auth
      if (
        this.auth &&
        this.apiClient &&
        this.auth.isAuthenticated &&
        this.state.data === null
      ) {
        this.getAllSearches()
      }
    }

    render = () => (
      <WrappedComponent
        auth={this.auth}
        apiClient={this.apiClient}
        searches={this.state}
        {...this.props}
      />
    )

    getAllSearches = () => {
      this.apiClient
        .getMeSearches()
        .then(res => {
          this.setState({
            ...this.state,
            data: res.data.items,
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }

    unsaveSearch = searchId => {
      this.apiClient
        .deleteMeSearch(searchId)
        .then(() => {
          this.setState({
            ...this.state,
            data: this.state.data.filter(
              existingSearch => existingSearch.id !== searchId
            ),
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }
  }
}
