/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import NavApp from '../navigation';
import {TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.7,
};

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView />

      <NavApp />
    </>
  );
};

export default App;
