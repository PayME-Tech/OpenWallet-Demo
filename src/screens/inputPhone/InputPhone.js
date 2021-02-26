/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {Colors} from '../../assets/Colors';
import {Fonts} from '../../assets/Fonts';
import {Images} from '../../assets/Image';
import {Layout} from '../../components/layout/Layout';
import {checkValidPhoneNumber} from '../../helpers';
import {updateApp} from '../../redux/slices/app.slice';
import {PopupOtp} from './sub-items/PopupOtp';

export const InputPhone = () => {
  const dispatch = useDispatch();

  const [phoneInput, setPhoneInput] = useState('');
  const [blur, setBlur] = useState(false);

  const popupOtpRef = useRef(null);
  const openPopupOtp = () => popupOtpRef?.current?.open();

  const handlePressBtn = () => {
    setBlur(true);
    if (checkValidPhoneNumber(phoneInput)) {
      // call api send otp -> open popup or show error
      openPopupOtp();
    }
    // else if (!phoneInput) {
    //   closeModal();
    //   dispatch(updateApp({phone: phoneInput}));
    // }
  };

  const handleUpdatePhone = () => {
    popupOtpRef?.current?.close();
    dispatch(updateApp({phone: phoneInput}));
  };

  return (
    <Layout backgroundColor={'#ffffff'} style={{paddingTop: 0}}>
      <View style={{flex: 65}}>
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

      <View style={{flex: 35, justifyContent: 'space-between'}}>
        <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
          <Text
            style={{
              color: Colors.blackFifteen,
              fontFamily: Fonts.MainMedium,
              fontSize: 14,
            }}>
            Nhập SĐT của bạn
          </Text>

          <TextInput
            // autoFocus
            style={styles.textInput}
            value={phoneInput}
            onChangeText={(text) => setPhoneInput(text)}
            placeholder="SĐT của bạn"
            keyboardType="phone-pad"
            maxLength={11}
            onBlur={() => setBlur(true)}
          />
          {blur && !checkValidPhoneNumber(phoneInput) && (
            <Text style={styles.txtError}>Số điện thoại không hợp lệ</Text>
          )}

          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={[Colors.vibrantGreen, Colors.emeraldGreenThree]}
            style={{marginTop: 10, borderRadius: 25}}>
            <TouchableOpacity style={styles.button} onPress={handlePressBtn}>
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
      </View>

      <PopupOtp modalRef={popupOtpRef} updatePhone={handleUpdatePhone} />
      <SafeAreaView />
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
