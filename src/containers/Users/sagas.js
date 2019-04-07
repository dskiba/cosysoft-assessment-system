import { call, takeLatest } from "redux-saga/effects";
import { loadUsers } from "../../api/users";

export function* loadUsersSaga() {
  console.log("loadUsersSaga");

  const usersData = yield call(loadUsers);
  console.log({ usersData });
}

export default [
  function*() {
    yield takeLatest("LOAD_USERS", loadUsersSaga);
  }
];
