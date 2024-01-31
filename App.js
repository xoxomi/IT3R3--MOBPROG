import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Authentication/LoginScreens';
import SignUpScreen from './Authentication/SignUpScreen';
import ForgotPasswordScreen from './Authentication/ForgotPasswordScreen';
import Profile from './Screen/Profile';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { EditProfile } from './Screen';
import BottomTabNav from './navigations/BottomTabNav';

<<<<<<< HEAD
<<<<<<< HEAD
=======

SplashScreen.preventAutoHideAsync();
>>>>>>> 492e0233d34b58f93e1d6c9f47a662b257fcc480
=======

>>>>>>> parent of 4b5cfc5 (commit)
const Stack = createStackNavigator();


const App = () => {

  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Inter-Black.ttf'),
    bold: require('./assets/fonts/Inter-Bold.ttf'),
    medium: require('./assets/fonts/Inter-Medium.ttf'),
    regular: require('./assets/fonts/Inter-Regular.ttf'),
    semiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);
    if(!fontsLoaded){
      return null
  }
  
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName='BottomTabNavigation'>
          
      </Stack.Navigator>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Degree Deals" component={SignUpScreen} />
          <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Messeges" component={Messeges} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
      );
  };

  
export default App;
