/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, { Component } from 'react';
import {
    StyleSheet
}  from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import MoviesList from "./views/movies/MoviesList";
import SplashScreen from "./views/splash/Splash";
import LoginScreen from "./views/users/Login";
import SignUpScreen from "./views/users/SignUp";

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const LoginNavigator = TabNavigator({
    Login: {
        screen: LoginScreen,
    },
    SignUp: {
        screen: SignUpScreen,
    },
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});


StarterApp = StackNavigator({
    Splash: {screen: SplashScreen},
    Movies: {screen: MoviesList},
    LoginNavigator: {screen: LoginNavigator}
});
module.exports = StarterApp;

