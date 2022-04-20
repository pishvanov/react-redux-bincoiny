import {
  call,
  put,
  takeEvery,
} from '@redux-saga/core/effects';

import api from '../../api';
import ActionTypes from '../../constants/actionTypes';

function* getWalletInfoSaga({ payload: url }) {
  try {
    const { data: wallet } = yield call(api.get, `/get_address_balance/BTC/${url}`);
    const { data: received } = yield call(api.get, `/get_tx_received/BTC/${url}`);
    const { data: spent } = yield call(api.get, `/get_tx_spent/BTC/${url}`);
    yield put({
      type: ActionTypes.GET_WALLET_INFO_RECEIVED,
      wallet,
      received,
      spent,
    });
    console.log(1);
  } catch (error) {
    yield put({
      type: ActionTypes.GET_WALLET_INFO_REJECTED,
      error,
    });
    console.log(2);
  }
}

function* watchGetWalletInfo() {
  yield takeEvery(ActionTypes.GET_WALLET_INFO_REQUESTED, getWalletInfoSaga);
}

export default watchGetWalletInfo;
