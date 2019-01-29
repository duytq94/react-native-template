import React, {Component} from 'react'
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import styles from './User.Style'
import {getUserRequest} from "./User.Action";

class UserScreen extends Component {
    static navigationOptions = {
        headerTitle: <Text style={styles.titleHeader}>USER</Text>,

    };

    constructor(props) {
        super(props)
        this.state = {
            getUser: {fetching: false, data: null, err: null}
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            getUser: newProps.getUser
        })
    }

    onBtnPress = () => {
        this.props.onCallApi(getUserRequest('duytq94'))
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btnGetData}
                    onPress={this.onBtnPress}
                >
                    <Text style={styles.textGetData}>GET DATA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnGetData}
                    onPress={() => this.props.navigation.navigate('FollowerScreen')}
                >
                    <Text style={styles.textGetData}>NEXT SCREEN</Text>
                </TouchableOpacity>
                {this.state.getUser.data ?
                    <View style={styles.body}>
                        <Image style={styles.avatar} source={{uri: this.state.getUser.data.avatar_url}}/>
                        <Text>{this.state.getUser.data.login}</Text>
                        <Text>{this.state.getUser.data.name}</Text>
                        <Text>{this.state.getUser.data.location}</Text>
                    </View>
                    : null
                }

                {this.state.getUser.fetching ?
                    <View style={styles.viewLoading}>
                        <ActivityIndicator/>
                    </View> :
                    null
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        getUser: state.getUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
