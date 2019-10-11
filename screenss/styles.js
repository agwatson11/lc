import { StyleSheet } from 'react-native'

var primaryLight = '#b37db5';
var primaryDark = '#85529c';

var grey1 = '#fbfafd';
var grey2 = '#ebeaf1';
var grey3 = '#dedde6';
var grey4 = '#5a666a';
var grey5 = '#2b3535';
var grey6 = '#211f1e';

var accent1 = '#fed061';
var accent2 = '#f0a919';
var accent3 = '#e4603f';

const sharedstyles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 0,
      alignItems: 'center',
      marginTop: 0,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
});
  
 const buttons = StyleSheet.create({  
   primary: {                         
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   }
 })
  
 export { sharedstyles, buttons }  