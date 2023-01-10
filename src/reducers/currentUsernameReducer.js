const currentUsernameReducer = (state = prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`, action) => {
  switch (action.type) {
    default:
      return state
  }

}

export default currentUsernameReducer;
