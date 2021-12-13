import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Clipboard,
  Alert,
  Linking,
  Platform,
  Dimensions,
} from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const { height, width} = Dimensions.get('window');


function EmergencyNumbers()  {

  

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

 
  
  
    
    return (

        
      <View style={styles.container}>
        <Text style={styles.instructions} >Emergency Numbers</Text>
        <TouchableOpacity  onPress={()=>{this.dialCall(123456789)}} style={styles.ambulance}>
        <View style={styles.ambuIcon}><Fontisto name="ambulance" size={height/12} color="black" /></View>
          <Text style={styles.ambuText}> Ambulance{"\n"}{"\n"}123-456-789</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.dialCall(98765432)}} style={styles.ambulance} >
        <View style={styles.ambuIcon}><FontAwesome5 name="hospital-alt" size={height/12} color="black" /></View>
          <Text style={styles.ambuText}>    Hospital{"\n"}{"\n"}123-456-789</Text>
        </TouchableOpacity>
      </View>
    );
  }


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
   
  },

  ambulance: {
    backgroundColor: "rgb(255,255,255)",
    margin: height/90,
    width: width/1.05,
    height: height/7,
    borderRadius: 15,
    elevation: 6,
    flexDirection: "row",
    marginBottom: height/40,
  },
  ambuIcon: {
    resizeMode: "contain",
    marginLeft: height/20,
    marginTop:height/40,
  },
  ambuText: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: height/35,
    marginTop: height/40,
    marginLeft: height/20,
  },

  instructions: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: height/30,
    marginTop: height/30,
    marginBottom:height/20,
    borderBottomWidth:10,
    borderRadius:10,
    borderBottomColor: "rgb(196, 196, 196)",
  },
});

export default EmergencyNumbers;
