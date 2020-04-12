import API from 'src/api';

export const openModalAction = (isShowModal) => ({
  type: 'OPEN_MODAL_CHANGE_PASSWORD',
  payload: isShowModal
});

export const closeModalAction = (isShowModal) => ({
  type: 'CLOSE_MODAL_CHANGE_PASSWORD',
  payload: isShowModal
});

export const getUserDataAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'GET_USER_DATA_REQUEST' });
      const response = await API.user.getUserData(id);
      dispatch({ type: 'GET_USER_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'GET_USER_DATA_FAIL' });
    }
  }
}


export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'MODAL_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const changePasswordAction = ( dataModal ) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'CHANGE_USER_PASSWORD_REQUEST' });
      const response = await API.user.changePassword(dataModal);
      if (response.data.error) {
        dispatch({ type: 'CHANGE_USER_PASSWORD_FAIL', payload: {data: response.data, status: response.status} });
      }
      else {
        dispatch({ type: 'CHANGE_USER_PASSWORD_SUCCESS', payload: {data: response.data, status: response.status} });
      }
      
    } catch (error) {
      if (error.response) {
        console.log('error.response', error.response);
        dispatch({ type: 'CHANGE_USER_PASSWORD_FAIL', payload: error.response });
      }
    }
  }
}