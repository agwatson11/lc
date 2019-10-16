import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MenuButton from '../components/MenuButton'
import firebase from 'firebase'
import '@firebase/firestore';

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

const firebaseConfig = {
    apiKey: "AIzaSyB4V0a1cpDzHwoTo9io5qyO4Y08HvdibjY",
    authDomain: "learningcurve-e2843.firebaseapp.com",
    databaseURL: "https://learningcurve-e2843.firebaseio.com/",
    projectId: "learningcurve-e2843",
    storageBucket: "learningcurve-e2843.appspot.com"
  };
  
firebase.initializeApp(firebaseConfig);

export default class TestScreen extends Component {

    componentDidMount() {
        var db = firebase.database().ref('postcodes/B100AA');
            db.once("value", function(snapshot) {
            console.log(snapshot.val().A);
            });
            
            
        //var docRef = db.collection("postcodes");
        //const output = {};

        //docRef.limit(50)
        //    .get()
        //    .then(querySnapshot => {
        //        querySnapshot.docs.map(function (documentSnapshot) {
        //            return (output[documentSnapshot.id] = documentSnapshot.data());
        //        });
        //this.setState({dataSource: Object.entries(output)}) ;
        //console.log("datasource:", this.state.dataSource );
        //    });
        
    }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
      backgroundColor: 'grey',
    },
      headerTintColor: 'pink',
      headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerLeft: MenuButton,
    };
  };

  render() {
    return (
    <View style={styles.MainContainer}>
        <Text>Test Screen</Text>
    </View>
    );
  }
}

