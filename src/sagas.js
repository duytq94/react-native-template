import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    GET_FOLLOWER_REQUEST,
    GET_USER_REQUEST, getFollowerFail,
    getFollowerSuccess,
    getUserFail,
    getUserSuccess,
    sendNetworkFail
} from "./actions";
import {getFollower, getUser} from "./api";

// Get user
function* watchGetUser() {
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

// Get follower
function* watchGetFollower() {
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

export default function* rootSaga() {
    yield all([
        watchGetUser(),
        watchGetFollower()
    ])
}
