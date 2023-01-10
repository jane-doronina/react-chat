export const SET_MESSAGES = "SET_MESSAGES"
export const CREATE_MESSAGE = "POST_MESSAGE"
export const SELECT_CHANNEL = "SELECT_CHANNEL"

export const setMessages = (channel) => {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(r => r.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  }
}

export const createMessage = (channel, author, content) => {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const body = { author: author, channel: channel, content: content, created_at: Date() };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }
}

export const selectChannel = (channel) => {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}
