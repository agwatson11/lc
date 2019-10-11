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

export default class MySQLScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      postcode: '',
      resultText: '',
      pcData: {
        "TEST" : { "Area": "GMCA", "Effective": "01/08/2019" },
      }
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
        
    </View>
    );
  }

  _doLookup = () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    console.log(this.state.postcode);
    Keyboard.dismiss();

    if(this.state.postcode) {

      if(this.state.pcData[this.state.postcode] != undefined) {
      resultText = 'Postcode: '+this.state.postcode+'\n\n'+
      'Area: '+this.state.pcData[this.state.postcode]["Area"]+'\n'+
      'Effective: '+this.state.pcData[this.state.postcode]["Effective"]+'\n';
      } else {
      resultText = 'Postcode Not Found';
      }
      
    } else {
      resultText = 'Postcode is Required';
    }

    this.setState({resultText: resultText})
    //Alert.alert(this.state.postcode)
    //this.props.navigation.navigate('App');
  };


}

