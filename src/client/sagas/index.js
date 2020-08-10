import { put, takeLatest, all } from 'redux-saga/effects';
import { LIST_USER, GET_DATA } from "../redux/actionTypes"
import ENUMS from '../../client/config/ENUMS';

function* fetchUsers() {
  const userList = yield fetch(`${ENUMS.ENDPOINT.URL}${ENUMS.ENDPOINT.USERS}`)
    .then(response => response.json());
  yield put({ type: LIST_USER, user_data:userList.users });
}

function* actionWatcher() {
  yield takeLatest(GET_DATA, fetchUsers)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
