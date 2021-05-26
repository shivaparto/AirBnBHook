export default (openClose, content) => {
  console.log(openClose);
  return {
    type: "OPEN_MODAL",
    payload: {
      openClose,
      content,
    },
  };
};
