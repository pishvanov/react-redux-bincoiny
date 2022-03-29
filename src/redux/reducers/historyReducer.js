import ActionTypes from '../../constants/actionTypes';

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.HISTORY_RECORD:
      return {
        ...state,
        history: state.history.concat([action.payload]),
      };
    default:
      return state;
  }
};

export default historyReducer;
