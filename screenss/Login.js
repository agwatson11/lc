import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image } from 'react-native';
import { customcolours } from '../components/AppStyles'
 
export default class Login extends Component {

    static navigationOptions = {
        header: null,

    }
    
    render() {
    return (
        <View style={styles.MainContainer}>
        <Image
          style={{width: 200, marginBottom: 20}}
          source={require('../assets/logo.png')}
        />
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Please Login</Text>
        <Text style={{ fontSize: 14, marginBottom: 2 }}>Email address</Text>
        <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => onChangeText(text)}
        value={''}
        />
        <Text style={{ fontSize: 14, marginBottom: 2 }}>Password</Text>
        <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => onChangeText(text)}
        value={''}
        />
        <Button style={{ fontSize: 14, marginBottom: 20 }} onPress={() => this.props.navigation.navigate('App')} title="Login" color="#b37db5" />
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