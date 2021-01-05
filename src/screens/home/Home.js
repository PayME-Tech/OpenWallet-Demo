/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/Colors';
import {Layout} from '../../components/layout/Layout';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../assets/Fonts';
import {Images, ImagesSVG} from '../../assets/Image';
import {Header} from './sub-items/Header';
import {ServiceUtilPayme} from './sub-items/ServiceUtilPayme';
import {ListProduct} from './sub-items/ListProduct';
import {Footer} from './sub-items/Footer';
import {PopupInputPhone} from './sub-items/PopupInputPhone';
import payME from 'react-native-payme-sdk';
import {createConnectToken, formatNumber} from '../../helpers';

const appToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MX0.wNtHVZ-olKe7OAkgLigkTSsLVQKv_YL9fHKzX9mn9II';
const publicKey =
  'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKi\nwIhTJpAi1XnbfOSrW/Ebw6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQ==\n';
const privateKey =
  'MIIBPAIBAAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKiwIhTJpAi1XnbfOSrW/Eb\nw6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQJBAJSfTrSCqAzyAo59Ox+m\nQ1ZdsYWBhxc2084DwTHM8QN/TZiyF4fbVYtjvyhG8ydJ37CiG7d9FY1smvNG3iDC\ndwECIQDygv2UOuR1ifLTDo4YxOs2cK3+dAUy6s54mSuGwUeo4QIhAK7SiYDyGwGo\nCwqjOdgOsQkJTGoUkDs8MST0MtmPAAs9AiEAjLT1/nBhJ9V/X3f9eF+g/bhJK+8T\nKSTV4WE1wP0Z3+ECIA9E3DWi77DpWG2JbBfu0I+VfFMXkLFbxH8RxQ8zajGRAiEA\n8Ly1xJ7UW3up25h9aa9SILBpGqWtJlNQgfVKBoabzsU=\n';
const configColor = ['#75255b', '#9d455f'];

export const Home = () => {
  const [phone, setPhone] = useState('null'); //0944074831
  const [balance, setBalance] = useState('0');
  const popupInputPhoneRef = useRef(null);

  const openPopupInputPhone = () => popupInputPhoneRef?.current?.open();

  useEffect(() => {
    if (/^([0-9]){10}$/g.test(phone)) {
      //do sonmething
      console.log({phone});
      const connectToken = createConnectToken(phone);

      payME.init(
        appToken,
        publicKey,
        connectToken,
        privateKey,
        configColor,
        'sandbox',
      );

      payME.getWalletInfo(
        (response) => {
          console.log('response', response);
          setBalance(formatNumber(`${response?.walletBalance?.balance || 0}`));
        },
        (error) => {
          console.log('error', error);
          alert('Thông tin xác thực không hợp lệ');
        },
      );
    }
  }, [phone]);

  const openWallet = () => {
    payME.openWallet(
      10000,
      'a',
      '',
      (res) => {
        console.log(res);
      },
      (message) => {
        console.log(message);
      },
    );
  };

  return (
    <Layout backgroundColor={'#E5E6ED'}>
      <View style={styles.layoutHeader}>
        <LinearGradient
          colors={[Colors.lightishBlue, Colors.purplyBlue]}
          style={styles.linearGradient}
        />
      </View>

      <Header
        openPopupInputPhone={openPopupInputPhone}
        phone={phone}
        balance={balance}
        openWallet={openWallet}
      />

      <ServiceUtilPayme />

      <ScrollView bounces={false} nestedScrollEnabled style={{marginTop: 10}}>
        <View style={styles.banner}>
          <Image source={Images.BannerSample} style={{width: '100%'}} />
        </View>

        <ListProduct />
      </ScrollView>

      <Footer />

      <PopupInputPhone modalRef={popupInputPhoneRef} updatePhone={setPhone} />
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
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  banner: {
    width: '100%',
  },
});
