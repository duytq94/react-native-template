import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_USER_REQUEST, getUserFail, getUserSuccess} from "./User.Action";
import {getUser} from "../api";
import {isNil} from 'ramda'
import {sendNetworkFail} from "../actions";

export function* watchGetUser() {
    yield takeLatest(GET_USER_REQUEST, handleGetUser)
}

function* handleGetUser(action) {
    const response = yield call(getUser, action.payload)
    if (response.ok) {
        yield put(getUserSuccess(response.data))
    } else {
        if (!isNil(response.problem) && (response.problem === 'NETWORK_ERROR' || response.problem === 'TIMEOUT_ERROR')) {
            yield put(sendNetworkFail(response.problem))
            yield put(getUserFail(response.problem))
        } else {
            yield put(getUserFail(response.problem))
        }
    }
}
