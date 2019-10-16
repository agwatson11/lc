import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

//Asset.loadAsync(require('../assets/json/AB.json'))

export default class LoadingScreen extends Component {
  
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    FileSystem.downloadAsync(
      'https://learningcurve-e2843.firebaseio.com/postcodes/A.json?auth=bbVN2Zl7oHYTKZRJY1x7NxgMv7nCFWYLlJEoaYzK',
      FileSystem.documentDirectory + 'A.json'
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      })
      .catch(error => {
        console.error(error);
      });
    

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 16, color: '#fff'}}>loading</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: '#85529c',
  },
});