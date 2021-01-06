/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {ImagesSVG} from '../../../assets/Image';

export const Footer = ({colors}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <ImagesSVG.Icon_1 />
          <ImagesSVG.Icon_2 />
        </View>

        <View style={styles.center}>
          <View style={styles.btnScan}>
            <ImagesSVG.ButtonScan fill={colors[0] || '#ffffff'} />
          </View>
        </View>

        <View style={styles.right}>
          <ImagesSVG.Icon_3 />
          <ImagesSVG.Icon_4 />
        </View>
      </View>

      <SafeAreaView />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
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
    marginHorizontal: 20,
  },
  btnScan: {
    position: 'absolute',
    top: -38,
  },
});
