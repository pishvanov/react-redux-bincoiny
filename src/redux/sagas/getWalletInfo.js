import {
  call,
  put,
  takeEvery,
} from '@redux-saga/core/effects';

import api from '../../api';
import ActionTypes from '../../constants/actionTypes';

function* getWalletInfoSaga() {
  try {
    const { data: blocks } = yield call(api.get, '/blocks');
    yield put({
      type: ActionTypes.GET_BLOCKS_RECEIVED,
      blocks,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.GET_BLOCKS_REJECTED,
      error,
    });
  }
}

function* watchGetWalletInfo() {
  yield takeEvery(ActionTypes.GET_BLOCKS_REQUESTED, getWalletInfoSaga);
}

export default watchGetWalletInfo;
