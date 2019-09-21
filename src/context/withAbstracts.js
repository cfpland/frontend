import React from 'react'

export function withAbstracts(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null,
        createAbstract: this.createAbstract,
        updateAbstract: this.updateAbstract,
        deleteAbstract: this.deleteAbstract,
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
        this.getAllAbstracts()
      }
    }

    render = () => (
      <WrappedComponent
        auth={this.auth}
        apiClient={this.apiClient}
        abstracts={this.state}
        {...this.props}
      />
    )

    getAllAbstracts = () => {
      this.apiClient
        .getMeAbstracts()
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

    createAbstract = inputData => {
      this.apiClient
        .postMeAbstract(inputData)
        .then(res => {
          const data = this.state.data
          data.push(res.data)

          this.setState({
            ...this.state,
            data,
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }

    updateAbstract = (id, inputData) => {
      this.apiClient
        .putMeAbstract(id, inputData)
        .then(res => {
          const data = this.state.data.map(abstract => {
            return abstract.id === id
              ? {
                  ...abstract,
                  ...inputData,
                }
              : abstract
          })

          this.setState({
            ...this.state,
            data,
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }

    deleteAbstract = id => {
      this.apiClient
        .deleteMeAbstract(id)
        .then(res => {
          const data = this.state.data.filter(abstract => abstract.id !== id)

          this.setState({
            ...this.state,
            data,
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }
  }
}
