import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { sharedstyles } from './styles'
 
export default class Privacy extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#85529c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    headerLeft: (
      <View style={{paddingLeft:16}}>
        <Icon
            name="three-bars"
            size={30}
            color='white'
            onPress={() => navigation.toggleDrawer()} />
      </View>
    ),
    };
  };
  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>PRIVACY POLICY</Text>
        <Text style={styles.text}>
        Learning Curve Group is committed to ensuring that your personal information is used properly and is kept securely. This Privacy Policy explains how we will collect and use your personal information.
        </Text>
        <Text style={styles.heading2}>DATA CONTROLLER</Text>
        <Text style={styles.text}>
        Any personal information that you provide to us is controlled by Learning Curve Group (a trading name of Learning Curve (NE) Group Limited, Learning Curve (JAA) Limited and Learning at Work Limited). Learning Curve Group is registered as a data controller with the Information Commissioner under reference: Z1343917. Learning Curve Group is a company registered in England and Wales with company number 06388790. Our registered office is at Unit 51 – 53 Innovation House, 26 Longfield Road, South Church Enterprise Park, Bishop Auckland, County Durham, DL14 6XB. If you have any queries about the information we hold about you, please contact Neil Whittaker, who you may write to at the above address.
        </Text>
        <Text style={styles.heading2}>COLLECTION OF YOUR PERSONAL INFORMATION</Text>
        <Text style={styles.text}>
        We may collect information about you in a number of ways. For example, when you visit our website, you may be asked to provide information about yourself, or if you are a learner undertaking online assessments via our online portal, e-Assessor, we will obtain information from you at the point when you sign up to a course. This may include your name, address, telephone number, national insurance number and information about the course(s) you are taking. You may also provide personal information to us when you contact us via the form on our website, or by email, telephone or letter. When you provide personal information to us or we collect personal information from other sources, we will treat that information in accordance with this Privacy Policy.
        </Text>
        <Text style={styles.heading2}>SHARING OF YOUR PERSONAL INFORMATION</Text>
        <Text style={styles.text}>
        We may share your personal information with third parties in the following ways:
        We sometimes use agents and service providers to process personal information on our behalf. For example, we may use third parties to send mail and to maintain our IT systems. Where we use agents and service providers to process your personal information, we will ensure that they have adequate security measures in place to safeguard your personal information.
        We will release your personal information when we are required to do so for legal or regulatory purposes or as part of legal proceedings.
        If you are a learner, we may share your personal information with your employer, to enable them to monitor your progress.
        If you are a learner or prospective learner making an application to study a qualification (or where you are an employer submitting an application on behalf of a prospective learner), we may pass your personal information to the further education providers which deliver that qualification. This will enable the further education provider in question to contact you in relation to signing you up to one of their learning programmes.
        </Text>
        <Text style={styles.heading2}>ACCESS TO YOUR PERSONAL INFORMATION</Text>
        <Text style={styles.text}>
        You have the right to request a copy of the personal information that we hold about you and to have any inaccuracies corrected. We will ask for confirmation of identity before we disclose any personal information. Please address requests to the Data Protection Officer, Unit 51 – 53 Innovation House, 26 Longfield Road, South Church Enterprise Park, Bishop Auckland, County Durham, DL14 6XB.
        </Text>
        <Text style={styles.heading2}>TELEPHONE CALLS</Text>
        <Text style={styles.text}>
          All calls may be monitored and recorded for training purposes.
        </Text>
        <Text style={styles.heading2}>UPDATES</Text>
        <Text style={styles.text}>
        We may update this Privacy Policy from time to time. Please ensure that you check the Privacy Policy on our website regularly for updates.
        </Text>
        <Text style={{marginBottom:40}}>---</Text>
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
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  text: {
    fontSize: 14,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#b37db5',
    marginBottom:20,
  },
  heading2: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#b37db5',
    marginTop:10,
    marginBottom:10,
  },
});