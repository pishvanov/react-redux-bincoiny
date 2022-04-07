import actionTypes from '../../constants/actionTypes';

export const deposit = (money) => ({
  type: actionTypes.DEPOSIT,
  payload: money,
});

export const withdraw = (money) => ({
  type: actionTypes.WITHDRAW,
  payload: money,
});

export const buy = () => ({
  type: actionTypes.BUY,
});

export const sell = () => ({
  type: actionTypes.SELL,
});

export const increase = (value) => ({
  type: actionTypes.INCREASE,
  payload: value,
});

export const decrease = (value) => ({
  type: actionTypes.DECREASE,
  payload: value,
});

export const setError = (bool) => ({
  type: actionTypes.SET_ERROR,
  payload: bool,
});

export const resetError = (bool) => ({
  type: actionTypes.RESET_ERROR,
  payload: bool,
});

export const historyRecord = (object) => ({
  type: actionTypes.HISTORY_RECORD,
  payload: object,
});

export const signIn = (boolean) => ({
  type: actionTypes.SIGN_IN,
  payload: boolean,
});

export const signOut = (boolean) => ({
  type: actionTypes.SIGN_OUT,
  payload: boolean,
});

export const signUp = (object) => ({
  type: actionTypes.SIGN_UP,
  payload: object,
});

export default deposit;
