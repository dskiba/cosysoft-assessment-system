import "whatwg-fetch";
import { put, call } from "redux-saga/effects";
import { assign } from "./assign";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (
    (response.status >= 200 && response.status < 300) ||
    400 === response.status
  ) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {boolean} skipJsonParse не парсить ответ как JSON
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, skipJsonParse = false) {
  return fetch(url, options)
    .then(checkStatus)
    .then(response => {
      let result = response;
      if (!skipJsonParse) {
        result = parseJSON(response);
      }
      return result;
    })
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

/**
 * Generator - wrapper for all server ajax request
 * @param {string} url request url
 * @param {object} options options for merge with standart options
 * @param {function} fallbackAction action for error response
 * @param {boolean} skipJsonParse should we skip json parse(useful in case of large and unneeded error data)
 * @return {*} request result or false
 */
export function* requestCall(
  url,
  options,
  fallbackAction = () => ({ type: "none" }),
  skipJsonParse = false
) {
  const requestOptions = assign(
    {
      method: "GET",
      credentials: "same-origin",
      headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-type": "application/json",
        "Cache-Control": "no-cache"
      }
    },
    options
  );

  const requestResult = yield call(request, url, requestOptions, skipJsonParse);

  if (requestResult.err !== undefined && requestResult.err !== null) {
    console.error(requestResult); // eslint-disable-line no-console
    let status = 0;
    if (requestResult.err.response && requestResult.err.response.status) {
      ({ status } = requestResult.err.response);
    }
    yield put(fallbackAction(status));
    return false;
  } else if (400 === requestResult.data.status) {
    const errors = requestResult.data.errors || false;
    if (false === errors) {
      yield put(fallbackAction(400));
    }
    return errors ? { errors } : false;
  }
  return requestResult.data;
}
