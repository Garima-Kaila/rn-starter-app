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
import GoogleSignIn from 'react-native-google-sign-in';
import Store from '../../store/Store';
var {
    loginSuccess
} = require('../../actions/login-actions');


const CLIENT_ID = '141822293497-ldn829khpl2qlmtek7qq3ckalm4u8gmg.apps.googleusercontent.com';
class GoogleSignInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        };
    }

    componentDidMount() {
      /*  Store.subscribe(() => {
            this.setState({
                userDetails: Store.getState().login.userDetails
            });
            //alert(JSON.stringify(Store.getState().login.userDetails, null, '  '));
        });*/
    }

    render() {

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
            </View>)
        } else {
            return (<View>
                <TouchableHighlight onPress={async () => {
          await GoogleSignIn.configure({
            clientID: CLIENT_ID,
            scopes: ['openid', 'email', 'profile'],
            shouldFetchBasicProfile: true,
          });

          const user = await GoogleSignIn.signInPromise();
          setTimeout(() => {
              let userInfo = {id:user.userID,email:user.email,name:user.name,image:user.photoUrlTiny}
               Store.dispatch(loginSuccess(userInfo));
            alert(JSON.stringify(userInfo, null, '  '));
          }, 1500);
        }}>
                    <Text style={styles.loginButton}>
                        Google Sign-In
                    </Text>
                </TouchableHighlight>
            </View>)
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

module.exports = GoogleSignInButton;