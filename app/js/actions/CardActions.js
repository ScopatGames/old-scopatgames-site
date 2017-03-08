import dispatcher from "./../dispatcher.js";

export function setActiveCard(data) {
  dispatcher.dispatch({
    type: "SET_ACTIVE_CARD",
    data
  });
}
