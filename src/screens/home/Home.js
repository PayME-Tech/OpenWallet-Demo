/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Layout} from '../../components/layout/Layout';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from './sub-items/Header';
import {Footer} from './sub-items/Footer';
import {PopupInputPhone} from './sub-items/PopupInputPhone';
import payME, {LANGUAGES} from 'react-native-payme-sdk';
import {
  checkLoginSDK,
  checkValidPhoneNumber,
  formatNumber,
  handleErrorSDK,
} from '../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {updateApp} from '../../redux/slices/app.slice';
import {PopupChangField} from './sub-items/PopupChangeField';
import {FIELDS} from '../../configs/variables.config';
import {ContentDefault} from './sub-items/ContentDefault';
import {ContentFieldFAndB} from './sub-items/ContentFieldFAndB';
import {ContentHotel} from './sub-items/ContentHotel';
import {ContentSuperMarket} from './sub-items/ContentSuperMarket';
import { APP_ENV } from '../../configs/app.config';

import { PopupChangePhone } from './sub-items/PopupChangePhone';
import { PopupNotify } from './sub-items/PopupNotify';
import { encryptAES } from '../../helpers/createConnectToken';

export const Home = () => {
  const {phone, balance, colors, field, appEnv, showLog} = useSelector(
    (state) => state.appReducer,
  );
  const configColor = colors || ['#75255b', '#9d455f'];
  const dispatch = useDispatch();

  const popupInputPhoneRef = useRef(null);
  const popupChangFieldRef = useRef(null);
  const popupChangePhoneRef = useRef(null);
  const popupNotifyRef = useRef(null);

  const openPopupInputPhone = () => popupInputPhoneRef?.current?.open();
  const openPopupChangField = () => popupChangFieldRef?.current?.open();
  const openPopupChangePhone = () => popupChangePhoneRef?.current?.open();

  const [listSupportedServices, setListSupportedServices] = useState([]);

  const switchEnv = () => {
    console.log('change env');
    // const newEnv = appEnv === 'SANDBOX' ? 'PRODUCTION' : 'SANDBOX';
    // dispatch(updateApp({appEnv: newEnv}));
    // Alert.alert(`ENV: ${newEnv}`, '');
  };

  const switchShowLog = () => {
    console.log('switchShowLog');
    // const newShowLog = !showLog;
    // dispatch(updateApp({showLog: newShowLog}));
    // Alert.alert(`showLog: ${newShowLog}`, '');
  };

  const handlePay = (amount = 299000) => {
    if (!checkValidPhoneNumber(phone)) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ');
      return;
    }
    if (!checkLoginSDK()) {
      payMELogin().then((res) => {
        if (res) {
          payME.pay(
            appEnv === 'SANDBOX' ? amount : 10000,
            'note',
            new Date().toISOString(),
            appEnv === 'SANDBOX' ? 24088141 : 25092940, // stroreId
            'extractData',
            true,
            null,
            (res) => {
              console.log('response pay', res);
              getWalletInfo();
            },
            (error) => {
              console.log('error pay', error);
              handleErrorSDK(error);
              if (error?.code === -4) {
                popupNotifyRef.current?.open('ACTIVE');
              } else if (error?.code === -5) {
                popupNotifyRef.current?.open('KYC');
              } else if (error?.code === -8) {
                // close modal
              } else {
                Alert.alert('Thông báo', `${error?.message || ''} ${error?.code ? `(${error?.code})` : ''}`);
              }
            },
          );
        }
      });
    } else {
      payME.pay(
        appEnv === 'SANDBOX' ? amount : 10000,
        'note',
        new Date().toISOString(),
        appEnv === 'SANDBOX' ? 24088141 : 25092940, // stroreId
        'extractData',
        true,
        null,
        (res) => {
          console.log('response pay', res);
          getWalletInfo();
        },
        (error) => {
          console.log('error pay', error);
          handleErrorSDK(error);
          if (error?.code === -4) {
            popupNotifyRef.current?.open('ACTIVE');
          } else if (error?.code === -5) {
            popupNotifyRef.current?.open('KYC');
          } else if (error?.code === -8) {
            // close modal
          } else {
            Alert.alert('Thông báo', `${error?.message || ''} ${error?.code ? `(${error?.code})` : ''}`);
          }
        },
      );
    }
  };

  const payMEInit = () => {
    console.log('=============paymeInit');
    dispatch(updateApp({isLoginSDK: false}));
    const connectToken = encryptAES(JSON.stringify({
      userId: phone,
      phone,
      timestamp: Date.now(),
    }), APP_ENV[appEnv].secretKey);
    
    payME.init(
      APP_ENV[appEnv].appToken,
      APP_ENV[appEnv].publicKey,
      connectToken,
      APP_ENV[appEnv].privateKey,
      configColor,
      LANGUAGES.VN,
      APP_ENV[appEnv].env,
      // showLog
    );
  };

  const payMELogin = () => {
    console.log('+++++++++++paymeLogin');
    return new Promise((resolve) => {
      payME.login(
        (response) => {
          console.log('response login', response);
          dispatch(updateApp({isLoginSDK: true}));
          resolve(true);
        },
        (error) => {
          console.log('error login', error);
          Alert.alert('Thông báo', `${error?.message || ''} ${error?.code ? `(${error?.code})` : ''}`);
          resolve(false);
          dispatch(updateApp({isLoginSDK: false}));
        },
      );
    });
  };

  // get balance
  const getWalletInfo = () => {
    console.log('getWalletInfo func');
    payME.getWalletInfo(
      (response) => {
        console.log('response getWalletInfo', response);
        dispatch(
          updateApp({
            balance: formatNumber(`${response?.Wallet?.balance || 0}`) || '0',
          })
        );
      },
      (error) => {
        console.log('error getWalletInfo', error);
        dispatch(updateApp({balance: '0'}));
      },
    );
  };

  const getSupportedServices = () => {
    console.log('getSupportedServices func');
    payME.getSupportedServices(
      (response) => {
        console.log('response getSupportedServices', response);
        setListSupportedServices(response || []);
      },
      (error) => {
        console.log('error getSupportedServices', error);
      },
    );
  };

  const scanQR = () => {
    if (!checkLoginSDK()) {
      payMELogin().then((res) => {
        if (res) {
          payME.scanQR(
            (response) => {
              console.log('response scanQR', response);
            },
            (error) => {
              console.log('error scanQR', error);
            },
          );
        }
      });
    } else {
      payME.scanQR(
        (response) => {
          console.log('response scanQR', response);
        },
        (error) => {
          console.log('error scanQR', error);
        },
      );
    }
  };

  // open popup input phone first time open app
  useEffect(() => {
    if (!phone) {
      openPopupInputPhone();
    }
  }, []);

  // check phone, appEnv, field -> re-init
  useEffect(() => {
    if (checkValidPhoneNumber(phone)) {
      payMEInit();
    }
  }, [phone, appEnv, field]);

  // change phone, appEnv -> re-get balance
  useEffect(() => {
    if (checkValidPhoneNumber(phone)) {
      if (!checkLoginSDK()) {
        payMELogin().then((res) => {
          if (res) {
            getWalletInfo();
            getSupportedServices();
          }
        });
      } else {
        getWalletInfo();
        getSupportedServices();
      }
    }
  }, [phone, appEnv]);

  const openSDKWallet = () => {
    payME.openWallet(
      (res) => {
        console.log('response openWllet', res);
      },
      (error) => {
        console.log('error openWallet', error);
        handleErrorSDK(error);
      },
    );
  };

  const openWallet = () => {
    if (!checkValidPhoneNumber(phone)) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ');
      return;
    }
    if (!checkLoginSDK()) {
      payMELogin().then((res) => {
        if (res) {
          openSDKWallet();
        }
      });
    } else {
      openSDKWallet();
    }
  };

  const renderContent = () => {
    switch (field) {
      case FIELDS.DEFAULT:
        return <ContentDefault handlePay={handlePay} listSupportedServices={listSupportedServices} popupNotifyRef={popupNotifyRef} />;
      case FIELDS.FIELD_FANDB:
        return <ContentFieldFAndB handlePay={handlePay} />;
      case FIELDS.HOTEL:
        return <ContentHotel handlePay={handlePay} />;
      case FIELDS.SUPERMARKET:
        return <ContentSuperMarket handlePay={handlePay} />;
      case FIELDS.TRAVELTOUR:
        return <ContentDefault handlePay={handlePay} />;

      default:
        return <ContentDefault handlePay={handlePay} />;
    }
  };

  return (
    <Layout backgroundColor={'#E5E6ED'}>
      <View style={styles.layoutHeader}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={colors}
          style={styles.linearGradient}
        />
      </View>
      <Header
        openPopupInputPhone={openPopupInputPhone}
        openPopupChangField={openPopupChangField}
        phone={phone}
        balance={balance}
        openWallet={openWallet}
        colors={colors}
        switchEnv={switchEnv}
        switchShowLog={switchShowLog}
        openPopupChangePhone={openPopupChangePhone}
      />

      {renderContent()}

      <Footer colors={colors} scanQR={scanQR} />

      <PopupInputPhone
        modalRef={popupInputPhoneRef}
        phone={phone}
        colors={colors}
      />
      <PopupChangField modalRef={popupChangFieldRef} />

      <PopupChangePhone modalRef={popupChangePhoneRef}  />

      <PopupNotify ref={popupNotifyRef} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 280,
  },
  linearGradient: {
    height: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
