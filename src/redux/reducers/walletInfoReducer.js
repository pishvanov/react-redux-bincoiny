import ActionTypes from '../../constants/actionTypes';

const initialState = {
  wallet: {},
  received: {},
  spent: {},
  fetching: false,
  error: null,
};

const walletInfoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_WALLET_INFO_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case ActionTypes.GET_WALLET_INFO_RECEIVED:
      return {
        ...state,
        fetching: false,
        error: null,
        wallet: action.wallet,
        received: action.received,
        spent: action.spent,
      };
    case ActionTypes.GET_WALLET_INFO_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default walletInfoReducer;
