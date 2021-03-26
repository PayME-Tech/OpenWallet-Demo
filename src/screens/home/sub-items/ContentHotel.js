/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';

export const ContentHotel = ({handlePay}) => {
  return (
    <>
      <ScrollView bounces={false}>
        <TouchableOpacity
          style={{width: '100%', paddingBottom: 20}}
          onPress={() => handlePay?.()}>
          <Image
            source={require('../../../assets/images/png/bodyContent3.png')}
            style={{width: '100%'}}
            // resizeMode="stretch"
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
