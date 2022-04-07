import ActionTypes from '../../constants/actionTypes';

const initialState = {
  isAuth: false,
  database: [],
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP:
      return {
        ...state,
        database: state.database.concat([action.payload]),
      };
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isAuth: true,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default authReducer;
