const initState = {
  dataForm: {
    title: '',
    content: ''
  }
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case 'NEW_POST_CHANGE_DATA_FORM':
      return (state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
    default:
      return state;
  }
}