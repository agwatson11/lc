import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image, ImageBackground, Dimensions, Alert 
} from 'react-native';
import { customcolours } from '../components/AppStyles'
import MenuButton from '../components/MenuButton'
import { sharedstyles } from './styles'

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
  },
});

export default class Main extends Component {

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
        <ImageBackground  source={require('../assets/main_background.jpg')} style={styles.backgroundImage}>
        <View style={{ flex: 1, width: dimensions.width, alignItems: 'center', paddingTop:50 }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Enter a postcode below</Text>
        <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, backgroundColor: '#fff' }}
        onChangeText={text => onChangeText(text)}
        value={''}
        />
        <Button style={{ fontSize: 14, marginBottom: 20 }} onPress={() => Alert.alert('Devolved')} title="Check" color="#b37db5" />
        </View>
        </ImageBackground>
        </View>
    );
  }
}

