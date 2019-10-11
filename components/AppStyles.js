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

const customcolours = {
    primaryLight : "#b37db5",
    primaryDark : "#85529c",
    textLight : "#fff",
    textDark : "#222",
    textPrimary : "#85529c",
};

const panels = StyleSheet.create({
    panel1: {
        flex: 1,
        borderRadius: 20, 
        borderWidth: 1, 
        borderStyle: 'dotted', 
        borderColor: customcolours.primaryDark, 
        alignItems: 'center', 
        margin: 30, 
        paddingTop:50, 
        paddingBottom:50,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
});

const formstyles = StyleSheet.create({
    textinput: {
        textAlign: 'center', 
        fontSize: 18, 
        flex: 1, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 20, 
        backgroundColor: '#fff',
        padding:5,
        
    },
    textinputlarge: {
        textAlign: 'center', 
        fontSize: 36, 
        flex: 1, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 20, 
        marginLeft: 20, 
        marginRight: 20, 
        backgroundColor: '#fff',
        padding:5,
        textTransform: 'uppercase',
    },
});
const buttonstyles = StyleSheet.create({
    button1: {
        fontSize: 24,
        marginBottom: 20,
        borderRadius: 22,
        
    },
});

const typographystyles = StyleSheet.create({
    heading1: {
        fontSize: 22,
        fontWeight: 'normal',
        color: customcolours.textDark,
        marginBottom:20,
    },
    headingCenter: {
        fontSize: 24,
        fontWeight: 'normal',
        color: customcolours.textDark,
        marginBottom:20,
        textAlign: 'center'
    },
    heading2: {
        fontSize: 18,
        fontWeight: 'normal',
        color: customcolours.primaryDark,
        marginTop:10,
        marginBottom:10,
    },
    heading3: {
        fontSize: 18,
        fontWeight: 'normal',
        color: customcolours.primaryDark,
        marginTop:0,
        marginBottom:10,
    },
    paratext: {
        fontSize: 15,
        marginBottom:10,
    },
    paratextcenter: {
        fontSize: 17,
        marginBottom:10,
        textAlign: 'center'
    },
    whitetextcenter: {
        fontSize: 17,
        marginTop:10,
        marginBottom:10,
        textAlign: 'center',
        color: 'white',
        fontWeight:'normal'
    },
    resultText: {
        color: 'white',
        fontSize: 24,
        marginTop:30,
        marginBottom:20,
        fontWeight: 'normal',
        textAlign: 'center'
    },
});

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
  
 export { customcolours, typographystyles, panels, formstyles, buttonstyles }  