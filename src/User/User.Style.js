import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    titleHeader: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginLeft: 50
    },
    btnGetData: {
        backgroundColor: 'black',
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 4,
        alignSelf: 'center'
    },
    textGetData: {
        color: 'white'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 30
    },
    viewLoading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center',

    }
})
