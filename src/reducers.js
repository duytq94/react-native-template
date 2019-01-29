import {combineReducers} from 'redux'
import {getUser} from "./User/User.Reducer";
import {getFollower} from "./Follower/Follower.Reducer";


const rootReducer = combineReducers({getUser, getFollower})
export default rootReducer
