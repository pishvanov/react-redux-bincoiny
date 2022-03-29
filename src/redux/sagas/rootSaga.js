import { all } from '@redux-saga/core/effects';
import watchAndLogSaga from './watchAndLogSaga';

function* rootSaga() {
  yield all([
    watchAndLogSaga(),
  ]);
}

export default rootSaga;
