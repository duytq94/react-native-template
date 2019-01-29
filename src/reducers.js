import {combineReducers} from 'redux'
import {
    GET_FOLLOWER_FAIL,
    GET_FOLLOWER_REQUEST,
    GET_FOLLOWER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS
} from "./actions";

const initialState = {fetching: false, data: null, err: null}

const getUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                fetching: true,
                data: null,
                err: null
            }
        case GET_USER_SUCCESS:
            return {
                fetching: false,
                data: action.payload.data,
                err: null
            }
        case GET_USER_FAIL:
            return {
                fetching: false,
                data: null,
                err: action.payload.message
            }
        default:
            return state
    }
}

const getFollower = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOLLOWER_REQUEST:
            return {
                fetching: true,
                data: null,
                err: null
            }
        case GET_FOLLOWER_SUCCESS:
            return {
                fetching: false,
                data: action.payload.data,
                err: null
            }
        case GET_FOLLOWER_FAIL:
            return {
                fetching: false,
                data: null,
                err: action.payload.message
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({getUser, getFollower})
export default rootReducer
