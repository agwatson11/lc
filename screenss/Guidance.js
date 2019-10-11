import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { sharedstyles } from './styles'
 
export default class Guidance extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#85529c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    headerLeft: (
      <View style={{paddingLeft:16}}>
        <Icon
            name="three-bars"
            size={30}
            color='white'
            onPress={() => navigation.toggleDrawer()} />
      </View>
    ),
    };
  };
  render() {
    return (
      <View style={sharedstyles.MainContainer}>
        <Text style={{ fontSize: 43 }}>Guidance Page</Text>
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