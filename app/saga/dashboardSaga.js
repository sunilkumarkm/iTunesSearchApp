import {call, put, takeLatest} from 'redux-saga/effects';
import {ACTIONS} from '../api/apiConstant';
import {fetchData} from '../api/apiService';

function* getItemList(action) {
  const response = yield call(fetchData, action.payload, true);
  if (response.status === 200) {
    yield put({
      type: ACTIONS.GET_ITEM_LIST_SUCCESS,
      data: response.data,
    });
  } else {
    yield put({
      type: ACTIONS.GET_ITEM_LIST_ERROR,
      error: response.data.detail,
    });
  }
}

export default function* authSaga() {
  yield takeLatest(ACTIONS.GET_ITEM_LIST_REQUEST, getItemList);
}
