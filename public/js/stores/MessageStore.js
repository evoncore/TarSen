// import { EventEmitter } from 'events';
// import dispatcher from '../dispatcher';
// import axios from 'axios';

// class MessageStore extends EventEmitter {

//   constructor() {
//     super()

//     axios.post('/api/messages').then((data) => this.messages = JSON.parse(data.data));
//   }

//   createMessage(text) {
//     const id = Date.now();

//     var obj = {
//       id: id,
//       userName: 'Vladimir',
//       text: text
//     }

//     axios.post('/api/messages/add', obj).then((data) => this.messages = JSON.parse(data.data));

//     this.emit('change');
//   }

//   getAll() {
//     return this.messages;
//   }

//   handleActions(action) {
//     switch(action.type) {
//       case 'CREATE_MESSAGE':
//         this.createMessage(action.text);
//         break;
//       case 'LOAD_MESSAGES':
//         this.getAll();
//         break;
//     }
//   }

// }

// const messageStore = new MessageStore;
// dispatcher.register(messageStore.handleActions.bind(messageStore));

// export default messageStore;