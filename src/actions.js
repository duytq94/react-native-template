// Network fail
export const SEND_NETWORK_FAIL = 'SEND_NETWORK_FAIL'
export const sendNetworkFail = (message) => {
    return {type: SEND_NETWORK_FAIL, message}
}

