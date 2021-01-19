import React from 'react';
import {View, Platform, StatusBar, SafeAreaView} from 'react-native';
import {Colors} from '../../assets/Colors';
import {styles} from './Layout.style';

export const Layout = ({
  children,
  style,
  backgroundColor = Colors.deepBlue,
}) => (
  <View style={[styles.container, style, {backgroundColor}]}>
    {/* {Platform.OS === 'ios' && <View style={styles.viewHolder} />} */}
    {children}
  </View>
);
