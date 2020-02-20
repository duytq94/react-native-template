import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from './RootContainer.Style'
import {View} from 'react-native'
import {clearNetworkFail} from "../actions"
import Toast from "react-native-simple-toast"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {DrawerNavigator} from "../DrawerNavigator"
import DetailProfileScreen from "../DetailProfile/DetailProfile.Screen"
import DetailFollowerScreen from "../DetailFollower/DetailFollower.Screen"

const Stack = createStackNavigator()

class RootContainerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowNetworkErr: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.sendNetworkFail.err) {
            switch (nextProps.sendNetworkFail.err) {
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
                    Toast.show(nextProps.sendNetworkFail.err)
                    break
            }
            nextProps.onCallApi(clearNetworkFail())
        }
        return null
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="ProfileScreen">
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{title: 'Drawer'}}
                        />
                        <Stack.Screen
                            name="DetailProfileScreen"
                            component={DetailProfileScreen}
                            options={{title: 'Detail profile'}}
                        />
                        <Stack.Screen
                            name="DetailFollowerScreen"
                            component={DetailFollowerScreen}
                            options={{title: 'Detail follower'}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
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
