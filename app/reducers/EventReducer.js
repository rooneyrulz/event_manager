export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_EVENT':
      return [payload, ...state];

    case 'REMOVE_EVENT':
      return state.filter((event) => event.id !== payload);

    default:
      return state;
  }
};
