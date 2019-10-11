import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { customcolours, typographystyles } from '../components/AppStyles'
import MenuButton from '../components/MenuButton'

const dimensions = Dimensions.get('window');

export default class TermsScreen extends Component {
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
                source={require('../assets/image2.jpg')}
              />
              </View>
              <View style={{ paddingHorizontal: 20 }} >
              <Text style={typographystyles.heading1}>TERMS & CONDITIONS</Text>
              
              <Text style={typographystyles.heading2}>INTRODUCTION</Text>
<Text style={typographystyles.paratext}>
You will be able to access most areas of this App without registering your details with us. Certain areas of this App are only open to you if you register.
{ '\n\n' }
We may revise these terms and conditions at any time by updating this page. You should check this App from time to time to review the current terms and conditions, because they are binding on you. Certain provisions of these terms and conditions may be superseded by expressly designated legal notices or terms located on particular pages of this App. If you do not wish to accept any new terms and conditions after we have posted them on the website, you should not continue to use this App.
</Text>
<Text style={typographystyles.heading2}>LICENCE</Text>
<Text style={typographystyles.paratext}>
The “Partner Area” of our Website allows customers and prospective customers to view our financial and commercial information. This area of our site may only be accessed by registered users and the information contained within this area is our confidential information. Users with access to this area must safeguard and keep confidential any and all such confidential information, and any such users must not use or disclose such confidential information to any third party. The obligations set out in this clause 2.1 shall not apply to any information to the extent it is publicly available or becomes publicly available through no act or omission of that party or to the extent that it is required to be disclosed by law or by order of a court of competent jurisdiction or other competent authority.
{ '\n\n' }
The “Vision Area” of our Website allows educational institutions we work with to view information in relation to their students. This area of our Website may only be accessed by registered users. To the extent that you have access to the Vision Area, you acknowledge and agree that for the purposes of the The Data Protection Act 2018 and the General Data Protection Regulation (GDPR), you are the data controller in relation to the personal data accessible in the Vision Area and you are responsible for obtaining appropriate consents from those persons in respect of whom we hold and process personal data. We will only process such personal data in accordance with your instructions. You shall indemnify us and keep us indemnified against all costs, expenses (including legal and other professional fees and expenses), losses, damages and other liabilities of whatever nature (whether contractual, tortious or otherwise) suffered or incurred by us and arising out of or in connection with any breach by you, your employees, representatives, agents or sub-contractors, of the obligations under this Clause 2.2.
{ '\n\n' }
You may not print and download extracts from the Vision Area or the Partner Area. You are otherwise permitted to print and download extracts from this App for your own use on the following basis:
{ '\n\n' }
2.1 - no documents or related graphics on this App (whether physical or digital copies) are modified in any way;
2.2 - no graphics, photographs, video or audio sequences on this App are used separately from accompanying text;
2.3 - you must not use any part of the content on our Website for commercial purposes without obtaining our prior written permission to do so;
2.4 - if you print off, copy or download any part of our Website in breach of these terms, without prejudice to any other right or remedy available to us, your right to use our Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made; and
2.5 - our copyright, trade marks and permission notices are visible in all extracts and our status (including any identified contributors) as the author of content is acknowledged.
Unless otherwise stated, the copyright and other intellectual property rights in all material on this App (including without limitation photographs and graphical images) are owned by us or our licensors. For the purposes of these terms and conditions, any use of extracts from this App other than in accordance with this clause 2 for any purpose is prohibited. If you breach any of the terms in these terms and conditions, your permission to use this App automatically terminates and you must immediately destroy any downloaded or printed extracts from this App.
{ '\n\n' }
Subject to clause 2.3, no part of this App may be reproduced or stored in any other website or included in any public or private electronic retrieval system or service without our prior written permission.
{ '\n\n' }
Any rights not expressly granted in these terms are reserved.
</Text>
<Text style={typographystyles.heading2}>SERVICE ACCESS</Text>
<Text style={typographystyles.paratext}>
While we endeavour to ensure that this App is normally available 24 hours a day, we will not be liable if for any reason this App is unavailable at any time or for any period.
{ '\n\n' }
We do not guarantee that our Website (or any part of it) will always be available or that access to it will be uninterrupted. Access to our Website is permitted on a temporary basis. We may suspend, withdraw, change or discontinue all or any part of our Website without notice, including in the case of system failure, maintenance or repair, or for reasons beyond our control.
{ '\n\n' }
You are responsible for making all arrangements necessary for you to have access to our Website.
{ '\n\n' }
You are responsible for ensuring that all persons who access our Website through your internet connection are aware of these terms and conditions and other applicable terms and conditions, and that they comply with them.
</Text>
<Text style={typographystyles.heading2}>VISITOR MATERIAL AND CONDUCT</Text>
<Text style={typographystyles.paratext}>
Other than personally identifiable information, which is covered under the Privacy Policy, any material you transmit or post to this App will be considered non-confidential and non-proprietary. We will have no obligations with respect to such material. We and our nominees will be free to copy, disclose, distribute, incorporate and otherwise use such material and all data, images, sounds, text and other things embodied therein for any and all commercial or non-commercial purposes.
{ '\n\n' }
Whenever you make use of a feature that allows you to upload content to our site, or to make contact with other users of our Website, you must not post or transmit to or from this App any material:
{ '\n\n' }
that is threatening, defamatory, obscene, indecent, seditious, offensive, pornographic, abusive, liable to incite racial hatred, discriminatory, menacing, scandalous, inflammatory, blasphemous, in breach of confidence, in breach of privacy or which may cause annoyance or inconvenience;
for which you have not obtained all necessary licences and/or approvals;
which constitutes or encourages conduct that would be considered a criminal offence, give rise to civil liability, or otherwise be contrary to the law of or infringe the rights of any third party, in the UK or any other country in the world; or
which is technically harmful (including, without limitation, computer viruses, logic bombs, Trojan horses, worms, harmful components, corrupted data or other malicious software or harmful data).
You warrant that any material you post or transmit to or from our Website will comply with the standards set out in these terms and conditions and you will be liable to us and indemnify us for any breach of that warranty. If you are a consumer user, this means you will be responsible for any loss or damage we suffer as a result of your breach of the relevant warranty.
{ '\n\n' }
You may not misuse the Website (including, without limitation, by hacking) or knowingly introduce viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful.
{ '\n\n' }
We will fully co-operate with any law enforcement authorities or court order requesting or directing us to disclose the identity or locate anyone posting any harmful material. We have the right to disclose your identity to any third party who is claiming that any content posted or uploaded by you to our Website constitutes a violation of their intellectual property rights, or of their right to privacy.
{ '\n\n' }
We will not be responsible, or liable to any third party, for the content or accuracy of any content posted by you, or any other user of our Website. The views expressed by other users on our Website do not represent our views or values.
{ '\n\n' }
We have the right to remove any posting you make on our Website if, in our opinion, your post does not comply with the content standards set out in these terms and conditions.
</Text>
<Text style={typographystyles.heading2}>LINKS TO AND FROM OTHER WEBSITES</Text>
<Text style={typographystyles.paratext}>
Links to third party websites on this App are provided solely for your convenience. If you use these links, you leave this App. We have not reviewed all of these third party websites, and do not control and are not responsible for these websites or their content or availability. We therefore do not endorse or make any representations about them, or any material found on them, or any results that may be obtained from using them. If you decide to access any of the third party websites linked to on this App, you do so entirely at your own risk.
{ '\n\n' }
If you would like to link to this App, you may only do so on the basis that you link to, but do not replicate, the home page of this App, you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, and subject to the following conditions:
{ '\n\n' }
5.1 - you do not remove, distort or otherwise alter the size or appearance of the Learning Curve Group (http://www.learningcurvegroup.co.uk/) logo;
5.2 - you do not create a frame or any other browser or border environment around this App;
5.3 - you do not in any way imply that we are endorsing any products or services other than our own;
5.4 - you do not misrepresent your relationship with us nor present any other false information about us;
5.5 - you do not otherwise use any trade marks displayed on this App without our express written permission;
5.6 - you do not link from a website that is not owned by you; and
5.7 - your website (in which you are linking) complies with all applicable laws and regulations and does not contain content that is distasteful, offensive or controversial, or infringes any intellectual property rights or other rights of any other person.
We expressly reserve the right to revoke the right granted (the right to link to this App) without notice.
{ '\n\n' }
You shall fully indemnify us for any loss or damage we or any of our group companies may suffer or incur as a result of your breach of clause 5.2. If you are a consumer user, this means you will be responsible for any loss or damage we suffer as a result of your breach of Clause 5.2.
</Text>
<Text style={typographystyles.heading2}>REGISTRATION</Text>
<Text style={typographystyles.paratext}>
To register to use those areas of our Website open only to registered users, you must be over eighteen years of age and you must apply in writing (or by e-mail) using the addresses detailed in these terms and conditions. We reserve the right, in our sole discretion, to reject any such applications for registration.
{ '\n\n' }
Each registration is for a single user only. We do not permit you to share your user name and password with any other person nor with multiple users on a network.
{ '\n\n' }
Responsibility for the security of any passwords issued rests with you and if you know or suspect that someone else knows your password, you should contact us immediately.
{ '\n\n' }
We may suspend or cancel your registration immediately at our reasonable discretion if you breach any of your obligations under these terms and conditions.
</Text>
<Text style={typographystyles.heading2}>DISCLAIMER</Text>
<Text style={typographystyles.paratext}>
While we endeavour to ensure that the information on this App is correct, we do not warrant the accuracy and completeness of the material on this App. We may make changes to the material on this App, or to the products and prices described in it, at any time without notice. The material on this App may be out of date, and we make no commitment to update such material. The Content on our Website is provided for general information only and it is not intended to be advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from taking, any action on the basis of the content of our Website.
{ '\n\n' }
The material on this App is provided “as is” without any conditions, warranties or other terms of any kind. Accordingly, to the maximum extent permitted by law, we provide you with this App on the basis that we exclude all representations, warranties, conditions and other terms (including, without limitation, the conditions implied by law of satisfactory quality, fitness for purpose, and the use of reasonable care and skill) which but for these terms and conditions might have effect in relation to this App.
{ '\n\n' }
We do not guarantee that our site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform in order to access our Website. You should use your own virus protection software.
</Text>
<Text style={typographystyles.heading2}>LIABILITY</Text>
<Text style={typographystyles.paratext}>
We, any other party (whether or not involved in creating, producing, maintaining or delivering this App), and any of our group companies and the officers, directors, employees, shareholders or agents of any of them, exclude all liability and responsibility for any amount or kind of loss or damage that may result to you or a third party (including, without limitation, any
{ '\n\n' }
indirect, special, punitive or consequential loss or damages; or
whether direct or indirect, any
(i) loss of income,
(ii) loss of profits,
(iii) loss of or damage to goodwill,
(iv) loss of or damage to data,
(v) loss of contracts,
(vi) loss of use of money, or
(vii) loss or damage arising from or connected in any way to business interruption; in each case whether in tort (including without limitation negligence), contract or otherwise) in connection with this App in any way or in connection with the use, inability to use or the results of use of this App, any websites linked to this App or the material on such websites, including but not limited to loss or damage due to viruses that may infect your computer equipment, software, data or other property on account of your access to, use of, or browsing this App or your downloading of any material from this App or any websites linked to this App.
Nothing in these terms and conditions shall exclude or limit our liability for (i) death or personal injury caused by negligence (as such term is defined by the Unfair Contract Terms Act 1977); (ii) fraud or fraudulent misrepresentation; (iii) misrepresentation as to a fundamental matter; or (iv) any liability which cannot be excluded or limited under applicable law.
{ '\n\n' }
If your use of material on this App results in the need for servicing, repair or correction of equipment, software or data, you assume all costs thereof.
{ '\n\n' }
You agree to indemnify us fully, defend and hold us, and our officers, directors, employees and agents, harmless from and against all claims, liability, damages, losses, costs (including reasonable legal fees) arising out of any breach of the terms and conditions by you, or your use of this App, or the use by any other person using your registration details. If you are a consumer user, this means you will be responsible for any loss or damage we suffer as a result of your breach of any of these terms and conditions, you use of this App, or the use by any other person of your registration details.
</Text>
<Text style={typographystyles.heading2}>GOVERNING LAW AND JURISDICTION</Text>
<Text style={typographystyles.paratext}>
If you are a consumer, please note that these terms and conditions, their subject matter and the formation of an agreement with you, are governed by and shall be construed in accordance with English law. If you are a consumer, you and we both agree that the courts of England and Wales will have non-exclusive jurisdiction over any dispute arising out of or in connection with these terms and conditions. If you are a business, these terms and conditions, their subject matter and the formation of an agreement with you, are governed by and shall be construed in accordance with English law. If you are a business, disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the English courts.
{ '\n\n' }
We do not warrant that materials/items for sale on the Website are appropriate or available for use outside the United Kingdom. It is prohibited to access the Website from territories where its contents are illegal or unlawful. If you access this App from locations outside the United Kingdom, you do so at your own risk and you are responsible for compliance with local laws.
</Text>
<Text style={typographystyles.heading2}>MISCELLANEOUS</Text>
<Text style={typographystyles.paratext}>
You may not assign, sub-license or otherwise transfer any of your rights under these terms and conditions.
{ '\n\n' }
If any provision of these terms and conditions is found by any court of competent jurisdiction to be invalid, the invalidity of that provision will not affect the validity of the remaining provisions, which shall continue to have full force and effect.
{ '\n\n' }
Only the parties to these terms and conditions may seek to enforce them under the Contracts (Rights of Third Parties) Act 19
</Text>
              
              </View>
              <View style={{ flexDirection: "row" }} >
                <Image
                style={{flex: 1, width: dimensions.width, aspectRatio: 4/1 , marginTop: 30 }}
                source={require('../assets/banner.png')}
              />
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
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: 0,
    paddingHorizontal: 0,
  }
});