/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Colors } from '../../../assets/Colors';
import {ImagesSVG} from '../../../assets/Image';

export const Footer = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <ImagesSVG.IconColor width={22} height={22} />
          <ImagesSVG.IconColor width={22} height={22} />
        </View>

        <View style={styles.center}>
          <View style={styles.btnScan}>
            <ImagesSVG.ButtonScan />
          </View>
        </View>

        <View style={styles.right}>
          <ImagesSVG.IconColor width={22} height={22} />
          <ImagesSVG.IconColor width={22} height={22} />
        </View>
      </View>

      <SafeAreaView />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderTopWidth: 0.5,
    borderTopColor: Colors.whiteTwo,
  },
  left: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',

  },
  center: {
    width: 60,
    alignItems: 'center',
    marginHorizontal: 20
  },
  btnScan: {
    position: 'absolute',
    top: -38,
  },
});
