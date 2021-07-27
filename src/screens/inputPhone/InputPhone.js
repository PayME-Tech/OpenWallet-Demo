/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {clientRegister, sentOTP} from '../../apis';
import {Colors} from '../../assets/Colors';
import {Fonts} from '../../assets/Fonts';
import {Images} from '../../assets/Image';
import {Layout} from '../../components/layout/Layout';
import {checkValidPhoneNumber, convertPhoneNumberGlobal} from '../../helpers';
import {updateApp} from '../../redux/slices/app.slice';
import {PopupOtp} from './sub-items/PopupOtp';
import auth from '@react-native-firebase/auth';

export const InputPhone = () => {
  const dispatch = useDispatch();

  const [phoneInput, setPhoneInput] = useState('');
  const [blur, setBlur] = useState(false);

  const [confirm, setConfirm] = useState(null);

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const popupOtpRef = useRef(null);
  const openPopupOtp = () => popupOtpRef?.current?.open();
  const closePopupOtp = () => popupOtpRef?.current?.close();

  const onConfirmOTP = async (otp) => {
    closePopupOtp();
    dispatch(updateApp({loadingApp: true}));
    const isSuccessConfirmOtp = await confirmCode(otp);
    dispatch(updateApp({loadingApp: false}));
    if (isSuccessConfirmOtp) {
      handleUpdatePhone();
    } else {
      Alert.alert('Thông báo', 'Mã OTP không đúng');
    }
  };

  const resendOTP = () => {
    console.log('resendOTP');
    onSendOtp(phoneInput);
  };

  async function confirmCode(otp) {
    try {
      await confirm.confirm(otp);
      return true;
    } catch (error) {
      console.log('Invalid code.');
      return false;
    }
  }

  const onSendOtp = async (phone) => {
    // console.log(phone);
    // return;
    const phoneNumberGlobal = convertPhoneNumberGlobal(phone);
    const isSendOtp = await signInWithPhoneNumber(`+${phoneNumberGlobal}`);
    if (isSendOtp) {
      openPopupOtp();
    } else {
      Alert.alert('Thông báo', 'Không gửi được OTP');
    }
  };

  const handlePressBtn = async () => {
    Keyboard.dismiss();
    setBlur(true);
    if (checkValidPhoneNumber(phoneInput)) {
      onSendOtp(phoneInput);
      // openPopupOtp();
      // const response = await sentOTP(phoneInput);
      // console.log('=========', response);
      // if (response.status) {
      //   if (response.response.Account?.ForgotPassword?.SendOTP?.succeeded) {

      //   } else {
      //     alert(response.response.Account?.ForgotPassword?.SendOTP?.message || 'Error');
      //   }
      // } else {
      //   alert('Call api error')
      // }
    }
  };

  const handleUpdatePhone = () => {
    dispatch(updateApp({phone: phoneInput}));
  };

  useEffect(() => {
    // (async () => {
    //   const res = await clientRegister();
    //   console.log('+++++++++++++++++++++++', res);
    //   if (!res.status) {
    //     console.log('EROOR');
    //   }
    // })();
  }, []);

  return (
    <Layout backgroundColor={'#ffffff'} style={{paddingTop: 0}}>
      <View style={{flex: 1}}>
        <View style={{width: '100%', height: '65%'}}>
          <Image
            source={Images.Artwork}
            style={{
              height: '100%',
              width: '100%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <KeyboardAvoidingView
          style={{flex: 1, justifyContent: 'flex-end'}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View
            style={{
              width: '100%',
              height: '35%',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
              <Text
                style={{
                  color: Colors.blackFifteen,
                  fontFamily: Fonts.MainMedium,
                  fontSize: 14,
                  marginTop: 10,
                }}>
                Nhập SĐT của bạn
              </Text>

              <TextInput
                autoFocus
                style={styles.textInput}
                value={phoneInput}
                onChangeText={(text) => setPhoneInput(text)}
                placeholder="SĐT của bạn"
                keyboardType="phone-pad"
                maxLength={11}
                onBlur={() => setBlur(true)}
                onSubmitEditing={handlePressBtn}
              />
              {blur && !checkValidPhoneNumber(phoneInput) && (
                <Text style={styles.txtError}>Số điện thoại không hợp lệ</Text>
              )}

              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
                colors={[Colors.vibrantGreen, Colors.emeraldGreenThree]}
                style={{marginTop: 10, borderRadius: 25}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handlePressBtn}>
                  <Text style={styles.txtBtn}>Bắt đầu</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View>
              <Text
                style={{
                  color: Colors.warmGrey,
                  fontFamily: Fonts.MainLight,
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Đăng ký đối tác sử dụng sản phẩm
              </Text>
              <Text
                style={{
                  color: Colors.warmGrey,
                  fontFamily: Fonts.MainLight,
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Liên hệ{' '}
                <Text
                  style={{
                    color: Colors.kellyGreenThree,
                    fontFamily: Fonts.MainSemiBold,
                  }}>
                  1900 886665
                </Text>{' '}
                để được hỗ trợ
              </Text>
            </View>
            <SafeAreaView style={{flex: 0}} />
          </View>
        </KeyboardAvoidingView>
      </View>

      <PopupOtp
        modalRef={popupOtpRef}
        updatePhone={handleUpdatePhone}
        phone={phoneInput}
        onConfirmOTP={onConfirmOTP}
        resendOTP={resendOTP}
        closeModal={closePopupOtp}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: Fonts.MainMedium,
    fontSize: 16,
    color: Colors.blackSeven,
    backgroundColor: Colors.whiteTwo,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 10,
  },
  button: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  txtBtn: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: 18,
    color: Colors.white,
  },
  txtError: {
    fontFamily: Fonts.MainRegular,
    fontSize: 14,
    color: Colors.red,
  },
});
