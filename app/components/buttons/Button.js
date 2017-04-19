/**
 * Created by garima.kaila on 2017-04-14.
 */

import React, { Component } from 'react';

import {
    Text
}  from 'react-native';



var style = {
    ios: {
        background: 'blue',
        color: 'white',
        padding: 10,
        cursor: 'pointer'
    }
};

class Button extends React.Component {

    render() {
        return <Text style={style.ios} onPress={this.props.onPress}>{this.props.children}</Text>
    }

}

module.exports = Button;