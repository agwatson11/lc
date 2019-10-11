import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator, SafeAreaView, NavigationEvents, NavigationActions } from "react-navigation";
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import LoadingScreen from "./components/LoadingScreen";
import LoginScreen from "./components/LoginScreen";
import MainScreen from "./components/MainScreen";
import ContactScreen from "./components/ContactScreen";
import PrivacyScreen from "./components/PrivacyScreen";
import TermsScreen from "./components/TermsScreen";
import MainDrawer from "./components/MainDrawer";


const AuthStack = createStackNavigator({
  SignIn: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Login",
      headerTitleStyle: { alignContent: "center" }
    }
  },
  CreateAccount: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Login",
      headerTitleStyle: { textAlign: "center" }
    }
  },
  ForgotPassword: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
  ResetPassword: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  }
});

const MainStack = createStackNavigator({
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerTitle: "Main"
      }
    }
});


const ContactStack = createStackNavigator({
  Contact: {
      screen: ContactScreen,
      navigationOptions: {
        headerTitle: "Contact Us"
      }
    }
});

const PrivacyStack = createStackNavigator({
    Privacy: {
      screen: PrivacyScreen,
      navigationOptions: {
        headerTitle: "Privacy Policy"
      }
    }
});

const TermsStack = createStackNavigator({
    Terms: {
      screen: TermsScreen,
      navigationOptions: {
        headerTitle: "Terms & Conditions"
      }
    }
});

const MainDrawerStack = createDrawerNavigator({
    Main: {
        screen: MainStack,
        navigationOptions: {
          drawerLabel: "Main"
        }
    },
    Contact: {
        screen: ContactStack,
        navigationOptions: {
          drawerLabel: "Contact"
        }
    },
    Privacy: {
        screen: PrivacyStack,
        navigationOptions: {
          drawerLabel: "Privacy Policy"
        }
    },
    Terms: {
        screen: TermsStack,
        navigationOptions: {
          drawerLabel: "Terms & Conditions"
        }
    },
}, {
  contentComponent: MainDrawer
});



const App = createSwitchNavigator({
  Loading: {
    screen: LoadingScreen
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: MainDrawerStack
  }
});

export default createAppContainer(App);
