
const initState = {
  counter: 0
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case 'APPLICATION_INCREASE':
      return ({
        ...state,
        counter: state.counter + action.payload
      });
    case 'APPLICATION_DECREASE':
      return ({
        ...state,
        counter: state.counter - action.payload
      });
    default:
      return state;
  }
}
