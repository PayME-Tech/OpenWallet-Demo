import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home/Home';
import {InputPhone} from '../screens/inputPhone/InputPhone';

const MainStack = createStackNavigator();

const NavApp = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="InputPhone" component={InputPhone} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default NavApp;
