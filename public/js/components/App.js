import React from 'react'
import Nav from './ui-items/nav/Nav'

class App extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }

}

export default App