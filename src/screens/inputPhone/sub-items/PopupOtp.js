/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {verifyOTP} from '../../../apis';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {ImagesSVG} from '../../../assets/Image';
import {IconButton} from '../../../components/IconButton';
import {ModalizeTransparent} from '../../../components/ModalizeTransparent';
import PasswordInputConfirm from '../../../components/PasswordInputConfirm';
import {RF} from '../../../helpers/ResponsiveFontSize';

export const PopupOtp = ({
  modalRef,
  updatePhone,
  phone,
  onConfirmOTP = () => {},
  resendOTP = () => {},
  closeModal = () => {},
}) => {
  const inputRef = useRef(null);

  const onSubmitOtp = async (value) => {
    console.log('object', value);
    console.log('phone', phone);
    onConfirmOTP(value);
    // const response = await verifyOTP(phone, value);
    // console.log('=========', response);
    // if (response.status) {
    //   if (response.response.Account?.ForgotPassword?.VerifyOTP?.succeeded) {
    //     updatePhone?.();
    //   } else {
    //     alert(
    //       response.response.Account?.ForgotPassword?.VerifyOTP?.message ||
    //         'Error',
    //     );
    //   }
    // } else {
    //   alert('Call api error');
    // }
  };

  const focusOtpInput = () => {
    inputRef.current.focus();
  };

  return (
    <ModalizeTransparent
      ref={modalRef}
      modalStyle={styles.modalStyle}
      onOpened={focusOtpInput}>
      <View style={styles.modalContainer}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: Colors.blackFifteen,
              fontSize: RF(17),
              fontFamily: Fonts.MainSemiBold,
              textAlign: 'center',
            }}>
            Nhập OTP{' '}
          </Text>
          <IconButton
            source={<ImagesSVG.IcSetClose16Px />}
            onPress={closeModal}
            style={styles.iconClose}
          />
        </View>

        <Text
          style={{
            color: Colors.blackFifteen,
            fontSize: RF(14),
            fontFamily: Fonts.MainRegular,
            textAlign: 'center',
          }}>
          Đã gửi về số điện thoại: <Text style={styles.phone}>{phone}</Text>
        </Text>
        <View style={{marginVertical: 20}}>
          <PasswordInputConfirm onSubmit={onSubmitOtp} ref={inputRef} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              color: Colors.warmGrey,
              fontSize: RF(15),
              fontFamily: Fonts.MainLight,
              textAlign: 'center',
            }}>
            Chưa nhận được OTP.
          </Text>
          <TouchableOpacity onPress={resendOTP}>
            <Text
              style={{
                color: Colors.emeraldGreenFour,
                fontSize: RF(15),
                fontFamily: Fonts.MainLight,
                textAlign: 'center',
              }}>
              {' Gửi lại'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalizeTransparent>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    minHeight: '101%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 15,
    padding: 10,
  },
  phone: {
    color: Colors.blackFifteen,
    fontSize: RF(14),
    fontFamily: Fonts.MainSemiBold,
  },
  iconClose: {
    position: 'absolute',
    right: 10,
  },
});
