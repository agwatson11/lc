import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

export default class MainDrawer extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../assets/drawer-cover.png')} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                   
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Main') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Main') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Main')}>Main</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Contact') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Contact') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Contact')}>Contact</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Privacy') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Privacy') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Privacy')}>Privacy</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Terms') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Terms') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Terms')}>Terms & Conditions</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
        alignItems: 'center',
    },
    screenContainer: { 
        paddingTop: 40,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 5,
        textAlign: 'center'
    },
    selectedTextStyle: {
        
        color: '#85529c'
    },
    activeBackgroundColor: {
        //backgroundColor: '#b37db5'
    }
});