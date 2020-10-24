import {fork} from 'redux-saga/effects';
import dashboardSaga from './dashboardSaga';

export default function* rootSaga() {
  yield fork(dashboardSaga);
}
