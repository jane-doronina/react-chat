import { SET_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from "../actions";

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      return [...state, action.payload]
    case SELECT_CHANNEL:
      return []
    default:
      return state;
  }

}

export default messagesReducer;
