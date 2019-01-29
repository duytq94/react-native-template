import {GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS} from "./User.Action";

const initialState = {fetching: false, data: null, err: null}

export const getUser = (state = initialState, action) => {
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
