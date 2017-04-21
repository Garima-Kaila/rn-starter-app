/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, { Component } from 'react';
import {
    Button,
    StyleSheet
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'User Login',
        tabBarLabel: 'Log in',
        headerVisible:false
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        /* tabBarIcon: ({ tintColor }) => (
         <Image
         source={require('./chats-icon.png')}
         style={[styles.icon, {tintColor: tintColor}]}
         />
         ),*/
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('SignUp')}
                title="Sign Up"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
module.exports = LoginScreen;