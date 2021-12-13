import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home.js'
import ProfileScreen from './Profile.js'
import { FontAwesome5,AntDesign, } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Main() {
  return (
      <Tab.Navigator >
        <Tab.Screen name="Home"  component={HomeScreen} options={{
          tabBarIcon: ({color, size}) =>(
<FontAwesome5 name="home" size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({color, size}) =>(
<AntDesign name="profile" size={size} color={color} />
          )
        }}/>
      </Tab.Navigator>
  );
}