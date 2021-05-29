import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';

export const ContentSuperMarket = ({handlePay}) => {
  return (
    <>
      <ScrollView bounces={false}>
        <TouchableOpacity
          style={{width: '100%', paddingBottom: 20}}
          onPress={() => handlePay?.(299000)}>
          <Image
            source={require('../../../assets/images/png/contentBody.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
