const initState = {};
export default (state = initState, action) => {
  if (action.type === "REGISTER_ACTION") {
    return action.payload;
  } else if (action.type === "LOGOUt") {
    return initState;
  } else {
    return state;
  }
};
