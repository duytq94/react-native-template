import React, {Component} from 'react'
import {SafeAreaView, Text} from "react-native"
import {connect} from 'react-redux'
import styles from './DetailProfile.Style'

class DetailProfileScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Example this is the detail profile screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProfileScreen)
