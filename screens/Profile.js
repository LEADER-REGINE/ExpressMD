import React from 'react';
import { TouchableOpacity,Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Ionicons,FontAwesome5,Feather,AntDesign,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import AboutUsScreen from './AboutUs';
import EmergencyNumbersScreen from './EmergencyNumbers';
import { Avatar } from "react-native-elements";
const { height, width} = Dimensions.get('window');


 function ProfileScreen (){

    const navigation = useNavigation();
    const avatarSize = height/7;
        return (
            <View style={styles.container}>
            <View style={styles.avatarHeader} >
            <View style={styles.avatarImg}><Avatar
  rounded 
  size={avatarSize}
  source={require('../assets/icons/jay.jpg')}
/></View>
            <View style={styles.headText}>
            <Text style={styles.userText}> john Delacruz</Text>
            
        <Text style={styles.mobileText} > <Ionicons name="md-call" style={styles.emailIcon}/>  0917127172</Text>
        <Text style={styles.emailText} ><Ionicons name="mail" style={styles.emailIcon}/>  johndelacruz@gmail.com</Text>
                </View>
                 </View>

            <View style={styles.profContent}>
            <TouchableOpacity style={styles.ambuButton} activeOpacity={0.5}>
            <Text style={styles.menIcons} > <FontAwesome5 name="history" size={24}  />  History </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.ambuButton} activeOpacity={0.5} onPress={() => navigation.navigate('EmergencyNumbersScreen')}>
            <Text style={styles.menIcons} > <FontAwesome5 name="ambulance" size={24}  />  Emergency Numbers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ambuButton} activeOpacity={0.5}>
            <Text style={styles.menIcons} > <Feather name="settings" size={24}  />  Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ambuButton} activeOpacity={0.5}>
            <Text style={styles.menIcons} > <AntDesign name="questioncircleo" size={24}  />  FAQ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ambuButton} activeOpacity={0.5} onPress={() => navigation.navigate('AboutUsScreen')}>
            <Text style={styles.menIcons} > <MaterialCommunityIcons name="account-group-outline" size={34}  />  About Us</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ambuButton} activeOpacity={0.5}>
            <Text style={styles.menIcons} > <MaterialIcons name="logout" size={24}  />  Log Out</Text>
                            </TouchableOpacity>
                </View>
                </View>
        );
    }
    const Stack = createNativeStackNavigator();

function Profile() {

    return (
        <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
            <Stack.Screen name="EmergencyNumbersScreen" component={EmergencyNumbersScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: "#fff",
        flexDirection:"column",
    },


    avatarHeader:{
    backgroundColor: "rgba(22,118,148,1)",
    width:width,
    height:height/4,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,

    },

    avatarImg:{
            marginLeft:height/10,
            marginRight:height/30,
 
        },
        headText:{
            marginRight:height/10,
        },
        userText:{
            marginTop:height/40,
            fontSize: width/15,
            color: "white", 
            fontFamily: "Roboto",
            marginBottom: width/70,

        },
        mobileText:{
            fontSize: width/20,
            color: "white",
            fontFamily: "Roboto", 

        },
        emailText:{
            marginTop: height/90,
            fontSize: width/25,
            color: "white",
            fontFamily: "Roboto", 

        },
        emailIcon:{
            fontSize:height/45,
             color:"white",
        },

        menIcons:{
            marginLeft:height/40,
            fontSize: height/40,
             color:"rgba(128,128,128,1)",
             
        },
        ambuButton:{
            marginTop:height/60,
            width: width,
            height: height/15,
        },
       
    profContent:{
        width:width,
        height:height/2.5,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height/15,
        
        
    }

});
export default Profile;