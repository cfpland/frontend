import React from 'react'

const defaultState = {
  test: false,
  toggleTest: () => {},
}
const AppContext = React.createContext(defaultState)

class AppProvider extends React.Component {
  state = {
    test: false,
  }

  toggleTest = () => {
    let test = !this.state.test
    this.setState({ test })
  }

  componentDidMount() {
    this.setState({ test: true })
  }

  render() {
    const { children } = this.props
    const { test } = this.state
    return (
      <AppContext.Provider
        value={{
          test,
          toggleTest: this.toggleTest,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
