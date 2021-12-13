import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  Clipboard,
  Alert,
  Linking,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Avatar } from "react-native-elements";
const { height, width} = Dimensions.get('window');

function AboutUs () {
  

    const avatarSize = height/7;
    return (
      <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
        <View style={styles.container}>
        <Text style={styles.instructions}>About Us</Text>
        </View>
        <Text style={styles.about}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim
          lacus, mattis non auctor et, lacinia sit amet tellus. Mauris dictum
          eleifend dignissim. In posuere, metus ut lacinia viverra, ante augue
          commodo elit, a semper justo metus in leo.
        </Text>

    
<View style={styles.avaCon}>
    <View style={styles.avName}>
    <Text style={styles.devName}>
    Regine Manuel {"               "} 
    </Text>
    <Text style={styles.devRole}>
    {"\n"}Team Leader
    </Text>
    </View>
  
        <Avatar
  rounded 
  size={avatarSize}
  source={require('../assets/icons/regen.jpg')}
/>


</View>

<View style={styles.avaCon}>
   
        <Avatar
  rounded 
  size={avatarSize}
  source={require('../assets/icons/jay.jpg')}
/>
<View style={styles.avName}>
    <Text style={styles.devName}>
    Jay Ron Mendoza
    </Text>
    <Text style={styles.devRole}>
    {"\n"}Back-end Developer
    </Text>
    </View>

</View>

<View style={styles.avaCon}>
    <View style={styles.avName}>
    <Text style={styles.devName}>
    Marc Angelo Chiapco
    </Text>
    <Text style={styles.devRole}>
    {"\n"}Back-end Developer
    </Text>
    </View>
        <Avatar
  rounded 
  size={avatarSize}
  source={require('../assets/icons/chaps.jpg')}
/>

</View>
<View style={styles.avaCon}>
    
        <Avatar
  rounded 
  size={avatarSize}
  source={require('../assets/icons/prags.jpg')}
/>
<View style={styles.avName}>
    <Text style={styles.devName}>
    John Cristofer Prago
    </Text>
    <Text style={styles.devRole}>
    {"\n"}Front-end Developer
    </Text>
    </View>

</View>

<View style={styles.avaCon}>
    <View style={styles.avName}>
    <Text style={styles.devName}>
    Jym Cyruz Fajiculay
    </Text>
    <Text style={styles.devRole}>
    {"\n"}Front-end Developer
    </Text>
    </View>
        <Avatar
  rounded 
  size={avatarSize}
  source={require('../assets/icons/jym.jpg')}
/>

</View>


      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
   
  },

 

  instructions: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: height/30,
    marginTop: 10,
    marginLeft: 30,
    marginBottom:height/50,
    borderBottomWidth:10,
    borderRadius:10,
    borderBottomColor: "rgb(196, 196, 196)",
    textAlign:"center",
  },

  about: {
    textAlign: "justify",
    letterSpacing: 3,
    margin: height/40,
    fontFamily: "Roboto",
  },
  avaCon:{
    flexDirection:'row',
    marginLeft:height/30,
    marginTop:height/20,
    marginBottom: height/30,
  },
  avName:{
    flexDirection:'column',
    marginTop: height/30,
  },
  devName:{
    fontSize:height/40,
    fontWeight:"bold",
    marginLeft:height/30,

  },

  devRole:{
    marginRight:height/10,
    marginLeft:height/22,
  },

 
});

export default AboutUs;