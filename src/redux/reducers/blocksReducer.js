import ActionTypes from '../../constants/actionTypes';

const initialState = {
  blocks: null,
  fetching: false,
  error: null,
};

const blocksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_BLOCKS_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case ActionTypes.GET_BLOCKS_RECEIVED:
      return {
        ...state,
        fetching: false,
        error: null,
        blocks: action.blocks,
      };
    case ActionTypes.GET_BLOCKS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default blocksReducer;
