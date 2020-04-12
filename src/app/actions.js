
export const increaseAction = (payload = 1) => {
  return ({
    type: 'APPLICATION_INCREASE',
    payload: payload
  });
};

export const decreaseAction = payload => ({
  type: 'APPLICATION_DECREASE',
  payload
});
