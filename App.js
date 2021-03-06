/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native';


export default class App extends Component {

    constructor(props){

        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }

        componentDidMount () {

            return fetch('http://swapi.co/api/people/2')
            .then( (response)  => response.json() )
            .then( (responseJson) => {

                    this.setState({
                        isLoading:false,
                        dataSource: responseJson
                    })
                }
            ).catch( (error) => {
                        console.log(error)
                }
            )
        }

    }

  render() {

    if(this.state.isLoading) {

        return(
            <View style={styles.container} >
                <ActivityIndicator />
            </View>
        )
    }else{


        return (
          <View style={styles.container}>
            <Text> WORKS </Text>
          </View>
        );

    }
  }
}

const styles = StyleSheet.create({
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
});
