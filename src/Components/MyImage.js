import React, {Component} from 'react'
import {Image} from 'react-native'
import _ from 'lodash'

export default class MyImage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(nextState.current, this.state.current)
    }

    componentWillReceiveProps(newProps) {
        this.setState({current: 0})
    }

    onError = (error) => {
        const next = this.state.current + 1
        if (next < this.props.source.length) {
            this.setState({current: next})
        }
    }

    render() {
        const {source, ...rest} = this.props
        return (
            <Image
                source={source[this.state.current]}
                onError={this.onError}
                {...rest}
            />
        )
    }
}
