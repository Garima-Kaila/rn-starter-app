/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, {Component} from 'react';
import {
    Button,
    View,
    StyleSheet
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'User Sign Up',
        tabBarLabel: 'Sign Up',
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
            <View>

                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Already have account"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Movies', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
module.exports = SignUpScreen;