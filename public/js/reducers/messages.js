
function messages(state=[], action) {
  switch(action.type) {
    case 'ADD_MESSAGE': {
      return [...state, {id: action.id, userName: action.userName, text: action.text}]
      break;
    }

    default: {
      return state;
    }
  }
}

export default messages