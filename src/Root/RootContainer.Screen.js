import React, {Component} from 'react'
import AppContainer from "../AppNavigation";
import {connect} from 'react-redux';
import styles from './RootContainer.Style'
import {Text, TouchableOpacity, View} from 'react-native'
import {clearNetworkFail} from "../actions";

class RootContainerScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNetworkErr: false
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.sendNetworkFail.err) {
            this.setState({isShowNetworkErr: true})
        } else {
            this.setState({isShowNetworkErr: false})
        }
    }

    onBtnNetworkErrPress = () => {
        this.props.onCallApi(clearNetworkFail())
    }

    render() {
        return (
            <View style={styles.container}>
                <AppContainer/>

                {this.state.isShowNetworkErr ?
                    <View style={styles.viewNetworkErr}>
                        <TouchableOpacity
                            style={styles.btnRetry}
                            onPress={this.onBtnNetworkErrPress}>
                            <Text style={styles.textRetry}>NETWORK ERROR</Text>
                        </TouchableOpacity>
                    </View>
                    : null
                }

            </View>
        );
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
