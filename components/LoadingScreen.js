import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
 
export default class LoadingScreen extends Component {
  
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('userToken');
    const userToken = false;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 16 }}>loading</Text>
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
  },
});