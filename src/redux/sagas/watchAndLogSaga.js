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
    case (actionTypes.WITHDRAW):
      logRecord.message = local.history.withdraw;
      break;
    case (actionTypes.BUY):
      logRecord.message = local.history.buy;
      break;
    case (actionTypes.SELL):
      logRecord.message = local.history.sell;
      break;
    case (actionTypes.INCREASE):
      logRecord.message = local.history.increase;
      break;
    case (actionTypes.DECREASE):
      logRecord.message = local.history.decrease;
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
