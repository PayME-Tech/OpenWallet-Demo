import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../assets/Colors';

export const LoadingApp = () => {
  const {loadingApp} = useSelector((state) => state.appReducer);

  if (!loadingApp) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.green} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
