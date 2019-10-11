import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, Dimensions, ImageBackground } from 'react-native';
import { customcolours, typographystyles, panels, formstyles, buttonstyles } from '../components/AppStyles'
import userData from '../assets/userData.json';
const dimensions = Dimensions.get('window');


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      resultText: '',
      uData: userData
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
      backgroundColor: customcolours.primaryDark,
    },
      headerTintColor: customcolours.textLight,
      headerTitleStyle: {
      fontWeight: 'normal',
    }
    };
  };


  render() {
  return (
      <View style={styles.MainContainer}>
      <ImageBackground  source={require('../assets/bg2.jpg')} style={styles.backgroundImage}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image style={{width: 200, marginTop: 70, marginBottom:50 }} source={require('../assets/logo.png')} />
      <Text style={ typographystyles.whitetextcenter }>please enter your email address</Text>
      <View style={{ flexDirection: "row" }}>
      <TextInput
      style={styles.textinput}
      type='email'
      keyboardType='email-address'
      placeholder='your email'
      onChangeText={(text) => this.setState({username:text})}
      

      
      />
      </View>
      <View style={{ flex:1 }}>
      <Button 
      onPress={ this._signInAsync } 
      //onPress={() => _signInAsync} 
      title="Login" 
      color="#b37db5"
      />
      </View> 
      
        
        <Text style={typographystyles.whitetextcenter} >{this.state.resultText}</Text>
        
      </View>
      <View style={ { flex:1 } }></View>
      </ImageBackground>
      </View>
  );
  }

  _signInAsync = () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    console.log(this.state.username);
    console.log(this.state.uData);
    if(this.state.uData[this.state.username] != undefined) {
      resultText = 'OK'; 
    } else {
      resultText = 'NOTOK';
    }
    //this.props.navigation.navigate('App');
  };
  
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: dimensions.width,
  },
  textinput: {
    textAlign: 'center', 
    fontSize: 18, 
    flex: 1, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    marginLeft: 20, 
    marginRight: 20, 
    backgroundColor: '#fff',
    padding:5,
    
  },
});