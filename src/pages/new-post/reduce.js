const initState = {
  data: {
    title: '',
    content: ''
  }
};

export default function newPostReducer(state = initState, action) {
  switch (action.type) {
    case 'NEW_POST_DATA_CHANGE':
      return {
        ...state, 
        data: {
          ...state.data,
          [action.payload.fieldId]: action.payload.value
        }
      };
    case 'NEW_POST_CREATE_SUCCESS': 
    return {
      ...state, 
      data: {
        title: '',
        content: ''
      }
    };
    default:
      return state;
  }
}