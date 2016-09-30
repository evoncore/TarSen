import React from 'react'

class Message extends React.Component {

  render() {
    return (
      <li>
        <h3>{this.props.userName}</h3>
        <p>{this.props.text}</p>
      </li>
    )
  }

}

export default Message