import React, {Component} from 'react'
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import styles from './Follower.Style'
import {getFollowerRequest} from "../actions";

class FollowerScreen extends Component {
    static navigationOptions = {
        headerTitle: <Text style={styles.titleHeader}>FOLLOWERS</Text>,
    };

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

    onBtnPress = () => {
        this.props.onCallApi(getFollowerRequest('duytq94'))
    }

    renderItem = ({item, index}) => {
        return (
            <View style={styles.viewWrapItem}>
                <Image style={styles.avatar} source={{uri: item.avatar_url}}/>
                <Text style={styles.textName}>{item.login}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btnGetData}
                    onPress={this.onBtnPress}
                >
                    <Text style={styles.textGetData}>GET FOLLOWER</Text>
                </TouchableOpacity>

                <FlatList
                    style={{flex: 1}}
                    data={this.state.getFollower.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => {
                        return <View style={{height: 10}}/>
                    }}
                    ListFooterComponent={() => {
                        return <View style={{height: 10}}/>
                    }}
                />

                {this.state.getFollower.fetching ?
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
        getFollower: state.getFollower
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowerScreen)
