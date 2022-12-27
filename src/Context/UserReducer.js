const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      const { navbar } = { ...state };
      return { ...state, navbar: !navbar };
    case "OPEN_NAVBAR":
      return { ...state, navbar: true };
    case "CLOSE_NAVBAR":
      return { ...state, navbar: false };
    case "TOGGLE_ORDER_NAV":
      const { orderNav } = { ...state };
      return { ...state, orderNav: !orderNav };
    case "ONLINE_INDICATE":
      return { ...state, online: action.payload.value };
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_RESTAURANT":
      return { ...state, restaurant: action.payload };
    default:
      throw new Error("action type not supported");
  }
};

export { reducer };