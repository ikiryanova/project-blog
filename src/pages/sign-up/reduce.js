import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    login: '',
    firsname: '',
    lastname: '',
    email: '',
    password: ''
  }
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}

export default function signUpReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-UP_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
    default:
      return state;
  }
}
