import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home/Home';
import {InputPhone} from '../screens/inputPhone/InputPhone';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
// auth().settings.appVerificationDisabledForTesting = true;

const MainStack = createStackNavigator();

const NavApp = () => {
  const {phone} = useSelector((state) => state.appReducer);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(userC) {
    // console.log('user', userC);
    setUser(userC);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="InputPhone">
        {phone ? (
          <MainStack.Screen name="Home" component={Home} />
        ) : (
          <MainStack.Screen name="InputPhone" component={InputPhone} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default NavApp;
