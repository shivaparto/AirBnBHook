const initState = { openClose: "closed", content: "" };

export default (state = initState, action) => {
  console.log("Modal STatus");
  console.log(action.payload);
  if (action.type === "OPEN_MODAL") {
    return action.payload;
  }

  return state;
};
