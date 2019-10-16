import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { customcolours, typographystyles } from '../components/AppStyles'
import MenuButton from '../components/MenuButton'
import Icon from 'react-native-vector-icons/Octicons';

const dimensions = Dimensions.get('window');

export default class ContactScreen extends Component {

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
        <SafeAreaView style={styles.MainContainer}>
        <ScrollView style={styles.scrollView}>
        <View style={{ flexDirection: "row" }} >
                <Image
                style={{flex: 1, width: dimensions.width, aspectRatio: 3/2 , marginBottom: 20 }}
                source={require('../assets/image3.jpg')}
              />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
        <Text style={ typographystyles.heading1 }>Get in touch with one of our Purple People now...</Text>
        
        <Icon
            name="device-mobile"
            size={24}
            color='grey' />
        <Text style={ typographystyles.heading3 }>01388 741 111</Text>
        <Icon
            name="mail"
            size={24}
            color='grey' />
        <Text style={ typographystyles.heading3 }>inductions@learningcurvegroup.co.uk</Text>
        <Icon
            name="location"
            size={24}
            color='grey' />
        <Text style={ typographystyles.heading3 }>Learning Curve Group</Text>
        <Text style={ typographystyles.paratext }>Dunelm Rise, Durhamgate{ '\n' }County Durham DL16 6FS</Text>
        <Text style={ typographystyles.paratext }>www.learningcurvegroup.co.uk</Text>
        
        
        </View>
        </ScrollView>
        </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    marginTop: 0,
    
  },
  scrollView: {
    paddingTop: 0,
    paddingHorizontal: 0,
    alignContent: 'center',
  }
});