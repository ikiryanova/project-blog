import cloneDeep from 'lodash/cloneDeep';

const initState = {
  userData: {},
  isShowModal: false,
  isLoading: false,
  dataModal: {
    currentPassword: '',
    newPassword: ''
  },
  errors: {
    currentPassword: '',
    newPassword: ''
  }
};

// function mapErrorFromServer(status, currentPassword, newPassword) {
//   switch (status) {
//     case 400:
//       if (!currentPassword || !newPassword) {
//         return 'Поле обязательно для заполнения!';
//       } else if (currentPassword.length < 3 || newPassword.length < 3) {
//         return 'Не менее 3х символов';
//       }
//     case 200:
//       return 'Текущий пароль не верный';
//     default:
//       return status;
//   }
// }

function errorCurrentPassword(status, currentPassword) {
  switch (status) {
    case 400:
      if (!currentPassword) {
        return 'Поле обязательно для заполнения!';
      } else if (currentPassword.length < 3) {
        return 'Не менее 3х символов';
      } else return '';
    case 200:
      return 'Текущий пароль не верный';
    default:
      return status;
  }
}

function errorNewPassword(status, newPassword) {
  switch (status) {
    case 400:
      if (!newPassword) {
        return 'Поле обязательно для заполнения!';
      } else if (newPassword.length < 3) {
        return 'Не менее 3х символов';
      } else return '';
      case 200:
        return '';
    default:
      return status;
  }
}

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}

export default function myPageReducer(state = initState, action) {
  switch (action.type) {
    case 'OPEN_MODAL_CHANGE_PASSWORD':
      return {
        ...state, 
        isShowModal: true
      };
    case 'CLOSE_MODAL_CHANGE_PASSWORD':
      return {
        ...state,
        isShowModal: false
      };
    case 'GET_USER_DATA_REQUEST':
      return {
        ...state,
        isLoading: false
      };
    case 'GET_USER_DATA_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        isLoading: true 
      };
    case 'MODAL_CHANGE_DATA_FORM':
      return merge(state, {
        dataModal: {
          ...state.dataModal,
          [action.payload.fieldId]: action.payload.value
        }
      });
    case 'CHANGE_USER_PASSWORD_SUCCESS':
      return {
        ...state,
        isShowModal: false,
        dataModal: {
          ...state.dataModal,
          currentPassword: '',
          newPassword: ''
        },
        errors: ''
      }
    case 'CHANGE_USER_PASSWORD_FAIL':
      const { status } = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          currentPassword: errorCurrentPassword(status, state.dataModal.currentPassword),
          newPassword: errorNewPassword(status, state.dataModal.newPassword)
        },
        //errors: mapErrorFromServer(status, state.dataModal.currentPassword, state.dataModal.newPassword)
      }
    default:
      return state;
  }
}



