/**
 * Created by garima.kaila on 2017-04-16.
 */


import React, {Component} from 'react';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {
    View,
    Text
}  from 'react-native';


class GoogleSignIn extends React.Component {

    constructor(props) {
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
                    'email', 'profile', 'https://www.googleapis.com/auth/plus.profile.emails.read', 'https://www.googleapis.com/auth/plus.login'
                ],
                iosClientId: '603421766430-mjg34tcspqcio7eld8hu4djv5vjdvtsr.apps.googleusercontent.com',
                webClientId:'141822293497-83t69ck2vmrfsahgq85kh64m3l7ml16p.apps.googleusercontent.com', //'603421766430-60og8n04mebic8hi49u1mrcmcdmugnd5.apps.googleusercontent.com',
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
        /*GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
         // play services are available. can now configure library
         })
         .catch((err) => {
         console.log("Play services error", err.code, err.message);
         })*/

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
    }

    render() {
        return (
            <View>
                <GoogleSigninButton
                    style={{width: 312 , height: 48,  alignItems: 'flex-end'}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn.bind(this)}/>
            </View>
        )
    }

}

module.exports = GoogleSignIn;