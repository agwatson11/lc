import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { customcolours } from '../components/AppStyles'
import MenuButton from '../components/MenuButton'
//import * as SQLite from 'expo-sqlite';
//import * as FileSystem from 'expo-file-system';
//import postcodeData from '../assets/postcodeDataSome.json';
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




//const db = SQLite.openDatabase('lc.db');
    
export default class DBAScreen extends Component {
  componentDidMount() {
  console.log(postcodeData["WV44HH"]);
  }
/*
  componentDidMount() {
    
    FileSystem.downloadAsync(
      'http://techslides.com/demos/sample-videos/small.mp4',
      FileSystem.documentDirectory + 'small.mp4'
    )
    console.log(FileSystem.getInfoAsync(FileSystem.documentDirectory + 'lc.db'));

    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });

    db.transaction(
      tx => {
        tx.executeSql("insert into items (done, value) values (0, ?),(1, ?)", ['text','text2']);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      this.update
    );
    
  }
*/

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
          <Text>Hi</Text>
      </View>
    );
  }

}

