import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/messages'
import Message from './Message'
import { mapStateToProps, mapDispatchToProps } from '../connectToStore'

class Messages extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Messages</h1>
        <ul>
        {
          this.props.messages.map((el) => {
            return <Message key={el.id} userName={el.userName} text={el.text} />
          })
        }
        </ul>
        <button onClick={this.props.addMessage.bind(null, 'vladimir', 'asdasd')}>add new Message</button>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)