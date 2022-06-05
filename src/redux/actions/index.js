import actionTypes from '../../constants/actionTypes';

export const setError = (bool) => ({
  type: actionTypes.SET_ERROR,
  payload: bool,
});

export const resetError = (bool) => ({
  type: actionTypes.RESET_ERROR,
  payload: bool,
});

export const getBlocksRequested = (string) => ({
  type: actionTypes.GET_BLOCKS_REQUESTED,
  payload: string,
});

export const getSortedTransactions = (string) => ({
  type: actionTypes.GET_SORTED_TRANSACTIONS,
  payload: string,
});
export const getTransactions = (string) => ({
  type: actionTypes.GET_TRANSACTIONS,
  payload: string,
});

export default getBlocksRequested;
