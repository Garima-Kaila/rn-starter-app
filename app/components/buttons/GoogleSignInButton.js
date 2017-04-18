/**
 * Created by garima.kaila on 2017-04-16.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';


class GoogleSignInButton extends React.Component {

  /*  constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this._setupGoogleSignin();
    }

    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({autoResolve: true});
            await GoogleSignin.configure({
                scopes: [
                    'email', 'profile'
                ],
                iosClientId: '603421766430-mjg34tcspqcio7eld8hu4djv5vjdvtsr.apps.googleusercontent.com',
                webClientId:'141822293497-ldn829khpl2qlmtek7qq3ckalm4u8gmg.apps.googleusercontent.com', //'603421766430-60og8n04mebic8hi49u1mrcmcdmugnd5.apps.googleusercontent.com',
                offlineAccess: false
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);
            this.setState({user});
        }
        catch (err) {
            console.log("Google signin error", err.code, err.message);
        }
    }

    _signIn() {
        /!*GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
         // play services are available. can now configure library
         })
         .catch((err) => {
         console.log("Play services error", err.code, err.message);
         })*!/

        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
                this.setState({user: user});
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }

    _signOut() {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            this.setState({user: null});
        })
            .done();
    }*/

    render() {
        return (
            <View>
                <TouchableHighlight onPress={async () => {
          await GoogleSignIn.configure({
            clientID: '141822293497-ldn829khpl2qlmtek7qq3ckalm4u8gmg.apps.googleusercontent.com',//'387614752364-757n5irliuapbfejtt5publdermgu1hr.apps.googleusercontent.com',
            scopes: ['openid', 'email', 'profile'],
            shouldFetchBasicProfile: true,
          });

          const user = await GoogleSignIn.signInPromise();
          setTimeout(() => {
            alert(JSON.stringify(user, null, '  '));
          }, 1500);
        }}>
                    <Text style={styles.instructions}>
                        Google Sign-In
                    </Text>
                </TouchableHighlight>
            </View>
           /* <View>
                <GoogleSigninButton
                    style={{width: 312 , height: 48,  alignItems: 'flex-end'}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn.bind(this)}/>
            </View>*/
        )
    }

}
const styles = StyleSheet.create({
    instructions: {
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