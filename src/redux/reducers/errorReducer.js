import ActionTypes from '../../constants/actionTypes';

const initialState = {
  isError: false,
};

const errorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        isError: true,
      };
    case ActionTypes.RESET_ERROR:
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};

export default errorReducer;
