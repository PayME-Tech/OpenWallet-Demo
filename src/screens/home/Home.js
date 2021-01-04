/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/Colors';
import {Layout} from '../../components/layout/Layout';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../assets/Fonts';
import {Images, ImagesSVG} from '../../assets/Image';
import {Header} from './sub-items/Header';
import {ServiceUtilPayme} from './sub-items/ServiceUtilPayme';
import {ListProduct} from './sub-items/ListProduct';

export const Home = () => {
  return (
    <Layout backgroundColor={'#E5E6ED'}>
      <View style={styles.layoutHeader}>
        <LinearGradient
          colors={[Colors.lightishBlue, Colors.purplyBlue]}
          style={styles.linearGradient}
        />
      </View>

      <Header />

      <ServiceUtilPayme />
      <ScrollView bounces={false} nestedScrollEnabled style={{marginTop: 10}}>
        <View style={styles.banner}>
          <Image source={Images.BannerSample} style={{width: '100%'}} />
        </View>

        <ListProduct />
      </ScrollView>

      <View style={styles.footer}>
        <Text>1111111111111111</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '40%',
  },
  linearGradient: {
    height: '100%',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  banner: {
    width: '100%',
  },
  footer: {

  }
});
