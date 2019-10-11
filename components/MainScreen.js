import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image, ImageBackground, Dimensions, Alert,
  Keyboard 
} from 'react-native';
import { customcolours, typographystyles, panels, formstyles, buttonstyles } from '../components/AppStyles'
import MenuButton from '../components/MenuButton'
import Icon from 'react-native-vector-icons/Octicons';
import postcodeData from '../assets/postcodeData.json';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

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
});

export default class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      postcode: '',
      resultText: '',
      pcData: postcodeData
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
      backgroundColor: customcolours.primaryDark,
    },
      headerTintColor: customcolours.textLight,
      headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerLeft: MenuButton,
    };
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground  source={require('../assets/bg1.jpg')} style={styles.backgroundImage}>
        <View >
        <Icon
            name="location"
            size={72}
            color='#fff' style={{marginTop:70,marginBottom:30,textAlign:'center'}} />  
        <Text style={ typographystyles.whitetextcenter }  >enter a postcode to check its devolved status</Text>
        <View style={{ flexDirection: "row" }}>
        <TextInput
        style={formstyles.textinputlarge}
        type='postal-code'
        placeholder='e.g G24 1SB'
        maxLength={8} autoCapitalize='characters'
        onChangeText={(postcode) => this.setState({postcode:postcode.toUpperCase()})}
        
        />
        </View>
        <View style={{marginLeft: 20, marginRight: 20, }}>
        <Button 
        style={ buttonstyles.button1 } 
        onPress={ this._doLookup } 
        title="Check" color="#b37db5" /></View>
        <View style={{alignContent: 'center'}} > 
        
        <Text style={typographystyles.resultText} >{this.state.resultText}</Text>
        </View>
        </View>
        
        </ImageBackground>
        </View>
    );
  }

  _doLookup = () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    console.log(this.state.postcode);
    console.log(this.state.pcData);
    Keyboard.dismiss();

    if(this.state.postcode) {
      $pc = this.state.postcode.replace(" ","");
      if(this.state.pcData[$pc] != undefined) {
        if(this.state.pcData[$pc]["Status"]!="Devolved") {
          resultText = 
          'Postcode: '+$pc+'\n'+
          'Non-Devolved\n\n';
        } else {
          resultText = 
          'Postcode: '+$pc+'\n'+
          'Devolved\n\n'+
          'Area: '+this.state.pcData[$pc]["Area"]+'\n'+
          'Effective: '+this.state.pcData[$pc]["Effective"]+'\n';
        }
       

      } else {
      resultText = 'Postcode: '+this.state.postcode+'\n'+
      'Not Found\n\n'
      }
      
    } else {
      resultText = 'A postcode is required'+'\n\n';
    }

    this.setState({resultText: resultText})
    //Alert.alert(this.state.postcode)
    //this.props.navigation.navigate('App');
  };


}

