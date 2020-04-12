import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    login: '',
    password: ''
  },
  errors: ''
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}

function getFormErrors(payload) {
  switch (payload) {
    case 'Unauthorized':
      return 'Неверный логин или пароль';
    case 'Bad Request':
      return 'Поле обязательно для заполнения!';
    default:
      return payload;
  }
}

export default function signInReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
    case 'SIGN-IN_FAIL':
      return {
        ...state,
        errors: getFormErrors(action.payload)
      }
    case 'SIGN-IN_SUCCESS': 
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          login: '',
          password: ''
        }
      }
    default:
      return state;
  }
}
