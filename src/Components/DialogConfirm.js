import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {fontFamily, fontSize} from "../const";
import colors from "../colors";

export default class DialogConfirm extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        return (
            <View style={styles.viewDialog}>
                <Text style={styles.textTitle}>{this.props.title ? this.props.title : 'Xác nhận'}</Text>
                <Text style={styles.textDescription}>
                    {this.props.description ? this.props.description : 'Bạn có chắc chắn về điều này?'}
                </Text>
                <View style={styles.viewLineHorizontal}/>
                <View style={styles.viewWrapBtn}>
                    <TouchableOpacity
                        style={styles.btnLeft}
                        onPress={this.props.onBtnLeftPress}
                    >
                        <Text style={styles.textBtnLeft}>
                            {this.props.textBtnLeft ? this.props.textBtnLeft : 'Hủy'}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.viewLineVertical}/>
                    <TouchableOpacity
                        style={styles.btnRight}
                        onPress={this.props.onBtnRightPress}
                    >
                        <Text style={styles.textBtnRight}>
                            {this.props.textBtnRight ? this.props.textBtnRight : 'Đồng ý'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    viewDialog: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: colors.white
    },
    textTitle: {
        textAlign: 'center',
        fontFamily: fontFamily.demiBold,
        fontSize: fontSize.large,
        color: colors.charcoalGrey,
        marginTop: 30
    },
    textDescription: {
        textAlign: 'center',
        fontFamily: fontFamily.regular,
        fontSize: fontSize.small,
        color: colors.boldGrey,
        marginTop: 9.4,
        marginLeft: 50,
        marginRight: 50
    },
    viewLineHorizontal: {
        height: 1,
        width: '100%',
        marginTop: 20.4,
        backgroundColor: colors.bgRoot
    },
    viewWrapBtn: {
        height: 39,
        width: '100%',
        flexDirection: 'row'
    },
    viewLineVertical: {
        height: '100%',
        width: 1,
        backgroundColor: colors.bgRoot
    },
    btnLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnLeft: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.large,
        color: colors.boldGrey,
    },
    btnRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnRight: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.large,
        color: colors.primary,
    },
}
