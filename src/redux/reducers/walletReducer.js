import actionTypes from '../../constants/actionTypes';

const initialState = {
  price: 1000,
  money: 200,
  coins: 0,
};

const walletReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return {
        ...state,
        money: state.money + action.payload,
      };
    case actionTypes.WITHDRAW:
      return {
        ...state,
        money: state.money - action.payload,

      };
    case actionTypes.BUY:
      return {
        ...state,
        money: state.money - state.price,
        coins: state.coins + 1,
      };
    case actionTypes.SELL:
      return {
        ...state,
        money: state.money + state.price,
        coins: state.coins - 1,

      };
    case actionTypes.INCREASE:
      return {
        ...state,
        price: state.price + action.payload,

      };
    case actionTypes.DECREASE:
      return {
        ...state,
        price: state.price - action.payload,

      };
    default:
      return state;
  }
};

export default walletReducer;
