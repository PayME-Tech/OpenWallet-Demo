/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {ImagesSVG} from '../../../assets/Image';

export const Footer = ({colors, scanQR = () => null}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <ImagesSVG.Icon_1 />
          <ImagesSVG.Icon_2 />
        </View>

        <View style={styles.center}>
          <TouchableOpacity style={styles.btnScan} onPress={scanQR}>
            <ImagesSVG.ButtonScan fill={colors[0] || '#ffffff'} />
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <ImagesSVG.Icon_3 />
          <ImagesSVG.Icon_4 />
        </View>
      </View>

      <SafeAreaView style={{backgroundColor: '#fff'}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
