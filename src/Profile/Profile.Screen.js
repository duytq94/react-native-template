import React, {Component} from 'react'
import {ActivityIndicator, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native"
import {connect} from 'react-redux'
import styles from './Profile.Style'
import {getProfileRequest} from "./Profile.Action"
import NoDataView from "../Components/NoDataView"

class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            getProfile: {fetching: false, data: null, err: null}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {getProfile: nextProps.getProfile}
    }

    getUserProfile = () => {
        this.props.onCallApi(getProfileRequest('duytq94'))
    }

    goDetail = () => {
        this.props.navigation.navigate('DetailProfileScreen')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.btnGetData}
                    onPress={this.getUserProfile}
                >
                    <Text style={styles.textGetData}>GET PROFILE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnGetData}
                    onPress={this.goDetail}
                >
                    <Text style={styles.textGetData}>GO DETAIL</Text>
                </TouchableOpacity>

                {this.renderDataView()}

                {this.state.getProfile.fetching ?
                    <View style={styles.viewLoading}>
                        <ActivityIndicator/>
                    </View> :
                    null
                }
            </SafeAreaView>
        )
    }

    renderDataView = () => {
        if (this.state.getProfile.data) {
            return (
                <View style={styles.body}>
                    <Image style={styles.avatar} source={{uri: this.state.getProfile.data.avatar_url}}/>
                    <Text style={styles.textData}>{this.state.getProfile.data.login}</Text>
                    <Text style={styles.textData}>{this.state.getProfile.data.name}</Text>
                    <Text style={styles.textData}>{this.state.getProfile.data.location}</Text>
                </View>
            )
        } else if (this.state.getProfile.err) {
            return (
                <NoDataView
                    onRetryPress={this.getUserProfile}
                />
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return {
        getProfile: state.getProfile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
