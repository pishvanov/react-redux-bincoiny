import { all } from '@redux-saga/core/effects';
import watchAndLogSaga from './watchAndLogSaga';
import watchGetWalletInfo from './getWalletInfo';

function* rootSaga() {
  yield all([
    watchAndLogSaga(),
    watchGetWalletInfo(),
  ]);
}

export default rootSaga;
