import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import {Colors} from '../assets/Colors';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerNoShadow: {},
});

export const Footer = ({
  behavior,
  disableShadow,
  containerStyle,
  backgroundColor,
  children,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={behavior || (Platform.OS === 'ios' ? 'padding' : null)}>
      <View
        style={[
          disableShadow ? styles.containerNoShadow : styles.container,
          containerStyle,
          {backgroundColor: backgroundColor ?? Colors.white},
        ]}>
        {children}
      </View>
      <SafeAreaView
        style={{
          backgroundColor: backgroundColor ?? Colors.white,
        }}
      />
    </KeyboardAvoidingView>
  );
};
