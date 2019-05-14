import React, {Component} from 'react'
import AppContainer from "../AppNavigation";
import {connect} from 'react-redux';
import styles from './RootContainer.Style'
import {View} from 'react-native'
import {clearNetworkFail} from "../actions";
import Toast from "react-native-simple-toast";

class RootContainerScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNetworkErr: false
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.sendNetworkFail.err) {
            switch (newProps.sendNetworkFail.err) {
                case 'NETWORK_ERROR':
                    Toast.show('No network connection, please try again')
                    break
                case 'TIMEOUT_ERROR':
                    Toast.show('Timeout, please try again')
                    break
                case 'CONNECTION_ERROR':
                    Toast.show('DNS server not found, please try again')
                    break
                default:
                    Toast.show(newProps.sendNetworkFail.err)
                    break
            }
            this.props.onCallApi(clearNetworkFail())
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppContainer/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        sendNetworkFail: state.sendNetworkFail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainerScreen)
