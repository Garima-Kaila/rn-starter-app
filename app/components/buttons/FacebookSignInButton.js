/**
 * Created by garima.kaila on 2017-04-16.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';


import Store from '../../store/Store';
var {
    loginSuccess
} = require('../../actions/login-actions');


class FacebookSignInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        };
    }

    componentDidMount() {
        Store.subscribe(() => {
            this.setState({
                userDetails: Store.getState().login.userDetails
            });

            alert("hello " + JSON.stringify(Store.getState().login.userDetails, null, '  '));
        });
    }

    render() {
        var _this = this;
        alert(this.state.userDetails.id);
        if (this.state.userDetails.id && this.state.userDetails.id.length > 0) {
            let image = this.state.userDetails.image;
            let name = this.state.userDetails.name + " (" + this.state.userDetails.email + ")";
            return (<View>
                <Text>
                    Welcome!!
                </Text>
                {/* <Image
                 style={{width: 50, height: 50}}
                 source={{uri: image}}
                 />*/}
                <Text>
                    {name}
                </Text>
            </View>);
        } else {
            return (
                <FBLogin
                    buttonView={ <View>
                                <Text style={styles.loginButton}>Facebook</Text>
                             </View> }
                    ref={(fbLogin) => { this.fbLogin = fbLogin }}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    permissions={["email","user_friends"]}
                    onLogin={function(user){
                    console.log(user);
                     setTimeout(() => {
                            let userInfo = {id:user.userId,email:user.profile.email,name:user.profile.name,image:user.profile.picture.data.url}
                            Store.dispatch(loginSuccess(userInfo));
                    },1500);
                 //   alert(JSON.stringify(userInfo, null, '  '));
                }}
                    onLoginFound={function(e){console.log(e)}}
                    onError={function(e){console.log(e)}}
                    onLoginNotFound={function(e){console.log(e)}}
                    onLogout={function(e){console.log(e)}}
                    onCancel={function(e){console.log(e)}}
                    onPermissionsMissing={function(e){console.log(e)}}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    loginButton: {
        textAlign: 'center',
        marginBottom: 5,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
});

module.exports = FacebookSignInButton;