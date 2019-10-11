import React, { Component } from 'react';
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Octicons';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch'
  }
});

class MenuButton extends Component {
  render() {
    return (
        <View style={{paddingLeft:16}}>
        <Icon
            name="three-bars"
            size={30}
            color='white'
            onPress={() => this.props.navigation.toggleDrawer()} />
      </View>
    );
  }
}

export default withNavigation(MenuButton);