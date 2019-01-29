import {call, put, takeLatest} from 'redux-saga/effects';
import {getFollower} from "../api";
import {GET_FOLLOWER_REQUEST, getFollowerFail, getFollowerSuccess} from "./Follower.Action";
import {sendNetworkFail} from "../actions";

export function* watchGetFollower() {
    yield takeLatest(GET_FOLLOWER_REQUEST, handleGetFollower)
}

function* handleGetFollower(action) {
    try {
        const res = yield call(getFollower, action.payload)
        if (res.data) {
            yield put(getFollowerSuccess(res.data))
        } else {
            yield put(getFollowerFail(res.err))
        }
    } catch (err) {
        yield(sendNetworkFail(err.toString()))
    }
}
