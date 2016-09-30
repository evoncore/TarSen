import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import axios from 'axios'

// import ROOT reducer
import rootReducer from './reducers/index'


var messages = [
  {
    id: 1,
    userName: 'Vladimir',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam totam eos deleniti enim, delectus, beatae provident iusto, voluptatibus quod ipsam veniam voluptates! Totam laudantium cumque vitae accusamus vel voluptatum adipisci, quo soluta, perspiciatis harum rem reiciendis consequatur molestiae veritatis sequi suscipit, sit! Architecto molestias nemo sequi perspiciatis, esse numquam a!'
  },
  {
    id: 2,
    userName: 'David',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ratione vero voluptates sed, porro, quo.'
  },
  {
    id: 3,
    userName: 'Lilya',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit cupiditate expedita minus molestiae? Tempora rem dolorum quis eligendi nobis.'
  }
];

const defaultState = {
  messages: messages
}

const store = createStore(rootReducer, defaultState)
export const history = syncHistoryWithStore(browserHistory, store)

export default store