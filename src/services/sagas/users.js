import { takeEvery, call, put } from "redux-saga/effects";
import { SET_USERS, GET_USERS } from '../actions';
import Axios from 'axios';

export const watchGetUsers = function* () {
    yield takeEvery(GET_USERS, workerGetusers);
}
function* workerGetusers() {
    const uri = 'https://jsonplaceholder.typicode.com/users';
    const result = yield call(Axios.get, uri);
    console.log("result", result);
    yield put({ type: SET_USERS, value: result.data });
}