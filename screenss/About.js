import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { sharedstyles } from './styles';

export default class About extends Component           {

  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'About Us',
    headerStyle: {
      backgroundColor: '#85529c',
    },
    headerLeft: (
      <View style={{paddingLeft:16}}>
        <Icon
            name="graph"
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
        <Text style={{ fontSize: 43 }}>About Us Page</Text>
        <Button onPress={() => this.props.navigation.navigate('App')} title="Press Me" />
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