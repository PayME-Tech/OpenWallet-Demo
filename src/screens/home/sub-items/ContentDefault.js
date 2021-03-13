import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Images} from '../../../assets/Image';
import {ListProduct} from './ListProduct';
import {ServiceUtilPayme} from './ServiceUtilPayme';

export const ContentDefault = ({handlePay, listSupportedServices, popupNotifyRef}) => {
  return (
    <ScrollView bounces={false} nestedScrollEnabled>
      <ServiceUtilPayme data={listSupportedServices} popupNotifyRef={popupNotifyRef} />

      {/* <ScrollView bounces={false} nestedScrollEnabled style={{marginTop: 10}}> */}
      <View style={[styles.banner, {marginTop: 10}]}>
        <Image source={Images.BannerSample} style={{width: '100%'}} />
      </View>

      <ListProduct handlePay={handlePay} />
      {/* </ScrollView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
  },
});
