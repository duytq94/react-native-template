import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_USER_REQUEST, getUserFail, getUserSuccess} from "./User.Action";
import {getUser} from "../api";
import {sendNetworkFail} from "../actions";

export function* watchGetUser() {
    yield takeLatest(GET_USER_REQUEST, handleGetUser)
}

function* handleGetUser(action) {
    try {
        const res = yield call(getUser, action.payload)
        if (res.data) {
            yield put(getUserSuccess(res.data))
        } else {
            yield put(getUserFail(res.err))
        }
    } catch (err) {
        yield(sendNetworkFail(err.toString()))
    }
}
