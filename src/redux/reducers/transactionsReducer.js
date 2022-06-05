import ActionTypes from '../../constants/actionTypes';

const initialState = {
  transactions: null,
  sortedTransactions: null,
};

const transactionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_SORTED_TRANSACTIONS:
      return {
        ...state,
        sortedTransactions: action.payload,
      };
    case ActionTypes.GET_TRANSACTIONS:
      return {
        ...state,
        sortedTransactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
