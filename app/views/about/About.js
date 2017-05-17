/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet
}  from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-universal'


import {
    NavigationActions
} from 'react-navigation';

class AboutScreen extends React.Component {

    static navigationOptions = {
        title: 'About',
    };

    render() {
        let scanArea = null
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle}/>
                </View>
            )
        }

        return (
            <BarcodeScanner
                onBarCodeRead={(code) => console.log(code)}
                style={styles.camera}>
                {scanArea}
            </BarcodeScanner>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
});
module.exports = AboutScreen;