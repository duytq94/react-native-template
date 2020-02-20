import React, {Component} from 'react'
import {SafeAreaView, Text} from "react-native"
import {connect} from 'react-redux'
import styles from './DetailFollower.Style'

class DetailFollowerScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Example this is the detail follower screen</Text>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailFollowerScreen)
