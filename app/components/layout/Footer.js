/**
 * Created by garima.kaila on 2017-04-14.
 */

//var React = require('react-native');
import React, {Component} from 'react';
import {
    View,
    Text
}  from 'react-native';

const footerStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding:5
};
const footerTextStyle = {

    fontSize: 18,
    fontWeight: 'bold',
};
class Footer extends React.Component {

    render() {
        return (
            <View style={footerStyle }>
                <Text style={footerTextStyle }>Powered By: Cross Innovation Labs, Inc.</Text>
            </View>
        );
    }

}

module.exports = Footer;