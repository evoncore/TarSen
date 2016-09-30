
export function addMessage(userName, text) {
  return {
    type: 'ADD_MESSAGE',
    id: Date.now(),
    userName,
    text
  }
}

export function removeMessage(id) {
  return {
    type: 'REMOVE_MESSAGE',
    id
  }
}