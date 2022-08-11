import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import Register from './src/Register';
import OTP from './src/OTP';
import Home from './Drawer/Home';
import Inmake from './Drawer/Inmake';
import Login from './src/Login';
import Signup from './src/Signup';
import Entry from './src/Entry';
import DrawerContent from './Drawer/DrawerContent';
import Contact from './Bottum/Contact';
import Detailes from './Bottum/Detailes';
import Message from './Bottum/Message';
import Profile from './Bottum/Profile';
import Resorces from './Bottum/Resorces';
import Biology from './Out/Biology';







const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="House" component={MyDrawer}
      options={{
        tabBarIcon: ({focused})=>
        focused ?<Icon name="home" size={24} color="red"/> : <Icon name="home" size={24} color="grey"/>
      }}/>
      <Tab.Screen name="Detailes" component={Detailes}
      options={{
        tabBarIcon: ({focused})=>
        focused ?<Icon name="category" size={24} color="red"/> : <Icon name="category" size={24} color="grey"/>
      }}/>
      <Tab.Screen name="Message" component={Message}
      options={{
        tabBarIcon:({focused})=>
        focused ? <Icon name="message" size={24} color="red"/> : <Icon name="message" size={24} color="grey"/>
      }}/>
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon:({focused})=>
        focused ? <Icon name="edit-attributes" size={24} color="red"/> : <Icon name="edit-attributes" size={24} color="grey"/>
      }}/>
      <Tab.Screen name="Resorces" component={Resorces}
      options={{
        tabBarIcon:({focused})=>
        focused ? <Icon name="drafts" size={24} color="red"/> :    <Icon name="drafts" size={24} color="grey"/> 
      }}/>
    </Tab.Navigator>
  )
}

function MyDrawer(){
  return(
<Drawer.Navigator
drawerContent = {(props)=> 
<DrawerContent {...props}/>}>
  <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
  <Drawer.Screen name="Inmake" component={Inmake}/>

</Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator>
  <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
  <Stack.Screen name="OTP" component={OTP} options = {{headerShown:false}}/>
  <Stack.Screen name="Login" component={Login} options = {{headerShown:false}}/>
  <Stack.Screen name="Signup" component={Signup} options = {{headerShown:false}} />
  <Stack.Screen name="Entry" component={Entry} options = {{headerShown:false}} />
  <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown:false}}/>
  <Stack.Screen name="Tab" component={MyTabs} options={{headerShown:false}}/>
  <Stack.Screen name="Biology" component={Biology} options={{headerShown:false}}/>
 </Stack.Navigator>
    </NavigationContainer>
  );
}