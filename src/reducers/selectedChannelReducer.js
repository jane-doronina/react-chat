import { SELECT_CHANNEL } from "../actions";

const selectedChannelReducer = (state = "general", action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload
    default:
      return state
  }

}

export default selectedChannelReducer;
