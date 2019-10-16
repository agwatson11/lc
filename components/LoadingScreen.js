import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

//Asset.loadAsync(require('../assets/json/AB.json'))

export default class LoadingScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dataLoaded: false,
      statusText: 'loading data',
      dataStatus: 0
    }
  }

  componentDidMount() {
    this._bootstrapAsync();
  }


  preloadCheck = ($a) => {
    
    this.setState({statusText: 'loaded '+$a})
    this.setState({dataStatus: this.state.dataStatus+1})
    if(this.state.dataStatus==26) {
      this._authme();
    }
  }

  checkDataFile = async ($a) => {

    FileSystem.getInfoAsync(
      FileSystem.documentDirectory + $a + '.json'
    ).then(tmp => {
      //console.log(tmp);
        if(tmp.exists) {
          //console.log($a+'.json exists');
          this.preloadCheck($a); 
        } else {
          //console.log($a+'.json doesnt exist');
          this.getDataFile($a);
        }
      })
    .catch(error => {
      console.error(error);
    });
  }

  getDataFile = async ($a) => {
    
    FileSystem.downloadAsync(
      'https://raw.githubusercontent.com/agwatson11/learningcurve/master/'+$a+'.json',
      FileSystem.documentDirectory + $a + '.json'
    )
    .then(({ uri }) => {
      //console.log('Finished downloading to ', uri);
      this.preloadCheck($a); 
      
    })
    .catch(error => {
      console.error(error);
    });
  }
  _authme = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    
    this.checkDataFile('A');
    this.checkDataFile('B');
    this.checkDataFile('C');
    this.checkDataFile('D');
    this.checkDataFile('E');
    this.checkDataFile('F');
    this.checkDataFile('G');
    this.checkDataFile('H');
    this.checkDataFile('I');
    this.checkDataFile('J');
    this.checkDataFile('K');
    this.checkDataFile('L');
    this.checkDataFile('M');
    this.checkDataFile('N');
    this.checkDataFile('O');
    this.checkDataFile('P');
    this.checkDataFile('Q');
    this.checkDataFile('R');
    this.checkDataFile('S');
    this.checkDataFile('T');
    this.checkDataFile('U');
    this.checkDataFile('V');
    this.checkDataFile('W');
    this.checkDataFile('X');
    this.checkDataFile('Y');
    this.checkDataFile('Z');
    

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 16, color: '#fff'}}>{ this.state.statusText }</Text>
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