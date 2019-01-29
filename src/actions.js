// Network fail
export const SEND_NETWORK_FAIL = 'SEND_NETWORK_FAIL'
export const sendNetworkFail = (message) => {
    return {type: SEND_NETWORK_FAIL, message}
}

// Get user github
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const getUserRequest = (username) => {
    return {type: GET_USER_REQUEST, payload: {username}}
}
export const getUserSuccess = (data) => {
    return {type: GET_USER_SUCCESS, payload: {data}}
}
export const getUserFail = (err) => {
    return {type: GET_USER_FAIL, payload: {err}}
}

// Get list follower
export const GET_FOLLOWER_REQUEST = 'GET_FOLLOWER_REQUEST'
export const GET_FOLLOWER_SUCCESS = 'GET_FOLLOWER_SUCCESS'
export const GET_FOLLOWER_FAIL = 'GET_FOLLOWER_FAIL'

export const getFollowerRequest = (username) => {
    return {type: GET_FOLLOWER_REQUEST, payload: {username}}
}
export const getFollowerSuccess = (data) => {
    return {type: GET_FOLLOWER_SUCCESS, payload: {data}}
}
export const getFollowerFail = (err) => {
    return {type: GET_FOLLOWER_FAIL, payload: {err}}
}
