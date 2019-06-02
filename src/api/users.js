import { call } from "redux-saga/effects";
import { baseUrl } from "../constans";
import { requestCall } from "../utils/request";

export function* loadUsers() {
  const requestURL = `${baseUrl}/users/all`;
  return yield call(requestCall, requestURL, {}, "actionErrorNetwork");
}
