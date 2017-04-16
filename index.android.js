/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Animated,
    ScrollView,
    ToolbarAndroid,
    View
} from 'react-native';


var SearchInput = require('./app/components/SearchInput');
var Container = require('./app/components/layout/Container');
var Button = require('./app/components/buttons/Button');
var Movies = require('./app/components/movies/Movies');
var Footer = require('./app/components/layout/Footer');
import Store from './app/store/Store';
var {
    fetchMovies
} = require('./app/actions/movies-actions');


var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#9999ff',
        height: 56,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        paddingTop: 65,
        backgroundColor: 'steelblue'

    },
});


export default class StarterApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    onChangeText(text) {
        if (text.length >= 2) {
            Store.dispatch(fetchMovies(text));
        } else {
            this.setState({
                movies: []
            });
        }
    }

    componentDidMount() {
        Store.subscribe(() => {
            this.setState({
                movies: Store.getState().movies.items
            });
        });
    }

    onActionSelected() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    title='Starter App'
                    style={styles.toolbar}
                    actions={[{title: 'Settings', show: 'always'}]}
                    onActionSelected={this.onActionSelected}/>
                <Container>
                    <SearchInput onChangeText={this.onChangeText.bind(this)}/>
                    <Movies movies={this.state.movies}/>
                </Container>
                <Footer></Footer>
            </View>
        );
    }


    /*render() {
     return (
     <View style={styles.container}>
     <Text style={styles.welcome}>
     Welcome to React Native!
     </Text>
     <Text style={styles.instructions}>
     To get started, edit index.android.js
     </Text>
     <Text style={styles.instructions}>
     Double tap R on your keyboard to reload,{'\n'}
     Shake or press menu button for dev menu
     </Text>
     </View>
     );
     }*/
}

/*const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5FCFF',
 },
 welcome: {
 fontSize: 20,
 textAlign: 'center',
 margin: 10,
 },
 instructions: {
 textAlign: 'center',
 color: '#333333',
 marginBottom: 5,
 },
 });*/

AppRegistry.registerComponent('StarterApp', () => StarterApp);
