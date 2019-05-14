import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    titleHeader: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    btnGetData: {
        backgroundColor: 'black',
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 4,
        alignSelf: 'center'
    },
    textGetData: {
        color: 'white'
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
    viewWrapItem: {
        flexDirection: 'row',
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 5
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    textName: {
        marginLeft: 10
    }
})
