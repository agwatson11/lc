import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
 
export default class MenuButton extends Component {
  
  render() {
    return (
        <View style={{paddingLeft:16}}>
        <Icon
            name="jersey"
            size={30}
            color='white'
            onPress={() => navigation.toggleDrawer()} />
        </View>
    );
  }
}
 
