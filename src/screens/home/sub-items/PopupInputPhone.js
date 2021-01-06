/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {ImagesSVG} from '../../../assets/Image';
import {ModalizeTransparent} from '../../../components/ModalizeTransparent';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../../assets/Fonts';
import {IconButton} from '../../../components/IconButton';
import {useDispatch} from 'react-redux';
import {updateApp} from '../../../redux/slices/app.slice';
import {checkValidPhoneNumber} from '../../../helpers';

export const PopupInputPhone = ({modalRef, phone, colors}) => {
  const closeModal = () => modalRef?.current?.close();
  const [phoneInput, setPhoneInput] = useState(phone);
  const [blur, setBlur] = useState(false);
  const dispatch = useDispatch();

  const handlePressBtn = () => {
    if (checkValidPhoneNumber(phoneInput)) {
      closeModal();
      dispatch(updateApp({phone: phoneInput}));
    }
  };

  return (
    <ModalizeTransparent ref={modalRef}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtInputPhone}>Nhập SĐT của bạn</Text>
          <IconButton source={<ImagesSVG.IconClose />} onPress={closeModal} />
        </View>

        <Text style={styles.txtDes}>
          Để bắt đầu trải nghiệm PayME Open eWallet
        </Text>

        <TextInput
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
          colors={colors}
          style={{marginTop: 20, borderRadius: 25}}>
          <TouchableOpacity style={styles.button} onPress={handlePressBtn}>
            <Text style={styles.txtBtn}>Bắt đầu</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ModalizeTransparent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  txtInputPhone: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: 16,
    color: Colors.blackSeven,
  },
  txtDes: {
    fontFamily: Fonts.MainRegular,
    fontSize: 14,
    color: Colors.warmGrey,
  },
  textInput: {
    fontFamily: Fonts.MainMedium,
    fontSize: 16,
    color: Colors.blackSeven,
    backgroundColor: Colors.whiteTwo,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 10,
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
