import { takeEvery, put } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import local from '../../constants/local';

function* logger(action) {
  const logRecord = {
    date: new Date().toLocaleString(),
    message: '',
  };
  switch (action.type) {
    case (actionTypes.DEPOSIT):
      logRecord.message = local.history.deposit;
      break;
    default: return local.error;
  }
  yield put({ type: actionTypes.HISTORY_RECORD, payload: logRecord });
  return undefined;
}

function* watchAndLogSaga() {
  yield takeEvery('*', logger);
}

export default watchAndLogSaga;
