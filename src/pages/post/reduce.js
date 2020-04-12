const initState = {
  data: {},
  isLoading: false
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_PAGE_GET_DATA_REQUEST': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'POST_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}