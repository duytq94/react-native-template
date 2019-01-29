import {all} from 'redux-saga/effects';
import {watchGetUser} from "./User/User.Saga";
import {watchGetFollower} from "./Follower/Follower.Saga";


export default function* rootSaga() {
    yield all([
        watchGetUser(),
        watchGetFollower()
    ])
}
