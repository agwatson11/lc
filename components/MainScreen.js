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
import MenuButton from '../components/MenuButton';
import * as FileSystem from 'expo-file-system';
import Icon from 'react-native-vector-icons/Octicons';

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
      resultText: ''
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

  componentDidMount() {
      //this.setState({resultText: "loading data"});
      
      //this.setState({resultText: "loaded data"})
  }

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
        placeholder='e.g G241SB'
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
  
  loadData = () => {
    const save = (res) => {
      return res;
    }
    const postcodedata = FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'A.json')
    .then(save);
  }

 
  _doLookup = () => {

    const displayResults = (data, pC) => {
      data = JSON.parse(data)
      if(data[pC] != undefined) {
        if(data[pC]["S"]!="D") {
          resultText = 
          'Postcode: '+pC+'\n'+
          'Non-Devolved\n\n';
        } else {
          resultText = 
          'Postcode: '+pC+'\n'+
          'Devolved\n\n'+
          'Area: '+data[pC]["A"]+'\n'+
          'Effective: '+data[pC]["E"]+'\n';
        }

      } else {
      resultText = 'Postcode: '+this.state.postcode+'\n'+
      'Not Found\n\n'
      }
      this.setState({resultText: resultText})
    }

    Keyboard.dismiss();

    if(this.state.postcode) {
      resultText = '?';
      $pc = this.state.postcode.replace(" ","");
      $char = $pc.substr(0,1);
        const postcodeData = FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'A.json').then(
        (data)=> {
          displayResults(data, $pc);
        }
        );
      
      
      
      
    } else {
      resultText = 'A postcode is required'+'\n\n';
    }
    
    this.setState({resultText: resultText})
    //Alert.alert(this.state.postcode)
    //this.props.navigation.navigate('App');
  };


}

