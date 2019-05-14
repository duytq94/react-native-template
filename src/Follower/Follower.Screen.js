import React, {Component} from 'react'
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import styles from './Follower.Style'
import {getFollowerRequest} from "./Follower.Action";
import NoDataView from "../Components/NoDataView";

class FollowerScreen extends Component {
    static navigationOptions = {
        headerTitle: <Text style={styles.titleHeader}>Followers</Text>
    }

    constructor(props) {
        super(props)
        this.state = {
            getFollower: {fetching: false, data: null, err: null}
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            getFollower: newProps.getFollower
        })
    }

    getFollower = () => {
        this.props.onCallApi(getFollowerRequest('duytq94'))
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btnGetData}
                    onPress={this.getFollower}
                >
                    <Text style={styles.textGetData}>GET FOLLOWER</Text>
                </TouchableOpacity>

                {this.renderDataView()}

                {this.state.getFollower.fetching ?
                    <View style={styles.viewLoading}>
                        <ActivityIndicator/>
                    </View> :
                    null}
            </View>
        )
    }

    renderDataView = () => {
        if (this.state.getFollower.data) {
            return (
                <FlatList
                    style={{flex: 1, paddingLeft: 10, paddingRight: 10}}
                    data={this.state.getFollower.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={this.renderFooterList}
                    ListFooterComponent={this.renderFooterList}
                />
            )
        } else if (this.state.getFollower.err) {
            return (
                <NoDataView
                    onRetryPress={this.getFollower}
                />
            )
        } else {
            return null
        }
    }

    renderItem = ({item, index}) => {
        return (
            <View style={styles.viewWrapItem}>
                <Image style={styles.avatar} source={{uri: item.avatar_url}}/>
                <Text style={styles.textName}>{item.login}</Text>
            </View>
        )
    }

    renderFooterList = () => {
        return <View style={{height: 10}}/>
    }

}

const mapStateToProps = state => {
    return {
        getFollower: state.getFollower
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowerScreen)
