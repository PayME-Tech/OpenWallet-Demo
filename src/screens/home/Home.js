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
  checkValidPhoneNumber,
  createConnectToken,
  formatNumber,
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

export const Home = () => {
  const {phone, balance, colors, field, appEnv} = useSelector(
    (state) => state.appReducer,
  );
  // console.log('appEnv11111111111111', appEnv);
  const configColor = colors || ['#75255b', '#9d455f'];
  const dispatch = useDispatch();

  const popupInputPhoneRef = useRef(null);
  const popupChangFieldRef = useRef(null);

  const openPopupInputPhone = () => popupInputPhoneRef?.current?.open();
  const openPopupChangField = () => popupChangFieldRef?.current?.open();

  // const [appEnv, setAppEnv] = useState('PRODUCTION');

  const switchEnv = () => {
    const newEnv = appEnv === 'SANDBOX' ? 'PRODUCTION' : 'SANDBOX';
    dispatch(updateApp({appEnv: newEnv}));
    Alert.alert(`ENV: ${newEnv}`, '');
  };


  const handlePay = () => {
    payMEInit();
    payMELogin().then((res) => {
      if (res) {
        payME.pay(
          299000,
          'note',
          Date.now().toString(),
          6868,
          'extractData',
          true,
          (res) => {
            console.log(res);
            getWalletInfo();
          },
          (error) => {
            console.log(error);
            if (error?.code === -4) {
              Alert.alert(
                'Tài khoản chưa kích hoạt',
                'Bạn có muốn kích hoạt không?',
                [
                  {
                    text: 'Huỷ',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Đồng ý',
                    onPress: () => {
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
                    },
                  },
                ],
                {cancelable: false},
              );
            } else if (error?.code === -6) {
              Alert.alert(error?.message || 'Vui lòng kiểm tra lại số dư tài khoản','');
            } else if (error?.code === -8) {
              // Alert.alert(error?.message || 'dong modal','');
            }
            else {
              // Alert.alert(error?.message || 'Error','');
              Alert.alert(`Error code ${error?.code || ''}`, `${error?.message}` || '');
            }
          },
        );
      }
    });
  };

  const payMEInit = () => {
    const connectToken = createConnectToken(phone, APP_ENV[appEnv].secretKey);
    // console.log('connectToken', connectToken)
    
    payME.init(
      APP_ENV[appEnv].appToken,
      APP_ENV[appEnv].publicKey,
      connectToken,
      APP_ENV[appEnv].privateKey,
      configColor,
      LANGUAGES.VN,
      APP_ENV[appEnv].env
    );
  };

  const payMELogin = () => {
    return new Promise((resolve) => {
      payME.login(
        (response) => {
          console.log('response', response);
          resolve(true);
        },
        (error) => {
          console.log('error', error);
          if (error?.code === 401) {
            Alert.alert(error?.message || 'Số điện thoại không hợp lệ!','');
          }
          else {
            Alert.alert(`Error code ${error?.code || ''}`, `${error?.message}` || '');
          }
          resolve(false);
        },
      );
    });
  };

  const getWalletInfo = () => {
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
        // alert('Thông tin xác thực không hợp lệ');
      },
    );
  };

  useEffect(() => {
    if (!phone) {
      openPopupInputPhone();
    }
  }, []);

  useEffect(() => {
    console.log(`ENV: ${appEnv}`);
    payMEInit();

      payMELogin().then((res) => {
        if (res) {
          getWalletInfo();
        } else {
          dispatch(updateApp({balance: '0'}));
        }
       
      });
  }, [appEnv]);

  useEffect(() => {
    // console.log({connectToken: createConnectToken('0795550300', APP_ENV[appEnv].secretKey)});
    // console.log('env1111111111111', APP_ENV[appEnv].env)
    if (checkValidPhoneNumber(phone)) {
      //do sonmething
      payMEInit();

      payMELogin().then((res) => {
        if (res) {
          getWalletInfo();
        } else {
          dispatch(updateApp({balance: '0'}));
        }
       
      });
    } else if (!phone) {
      dispatch(updateApp({balance: '0'}));
    }
  }, [phone]);

  const openWallet = () => {
    payMEInit();
    payMELogin().then((res) => {
      if (res) {
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
      }
    });
  };

  const renderContent = () => {
    switch (field) {
      case FIELDS.DEFAULT:
        return <ContentDefault handlePay={handlePay} />;
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
      />

      {renderContent()}

      <Footer colors={colors} />

      <PopupInputPhone
        modalRef={popupInputPhoneRef}
        phone={phone}
        colors={colors}
      />
      <PopupChangField modalRef={popupChangFieldRef} />
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
