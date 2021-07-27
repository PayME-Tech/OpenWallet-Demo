/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {ModalizeTransparent} from '../../../components/ModalizeTransparent';
import {RF} from '../../../helpers/ResponsiveFontSize';
import {updateApp} from '../../../redux/slices/app.slice';
export const PopupChangePhone = ({modalRef}) => {
  const dispatch = useDispatch();

  const handlePressCancel = () => modalRef?.current?.close();

  const handlePressChangePhone = () => {
    dispatch(updateApp({phone: ''}));
  };

  return (
    <ModalizeTransparent ref={modalRef} modalStyle={styles.modalStyle}>
      <View style={styles.modalContainer}>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.blackSeven,
            fontSize: RF(14),
            fontFamily: Fonts.MainRegular,
            paddingVertical: 40,
          }}>
          {'Bạn có muốn thay đổi\n số điện thoại khác'}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btn} onPress={handlePressCancel}>
            <Text
              style={{
                color: Colors.brownishGreyTwo,
                fontSize: RF(15),
                fontFamily: Fonts.MainRegular,
              }}>
              Huỷ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                borderLeftColor: Colors.pinkishGreyTwo,
                borderLeftWidth: 1,
              },
            ]}
            onPress={handlePressChangePhone}>
            <Text
              style={{
                color: Colors.green,
                fontSize: RF(15),
                fontFamily: Fonts.MainSemiBold,
              }}>
              Đổi SĐT
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
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopColor: Colors.pinkishGreyTwo,
    borderTopWidth: 1,
  },
});
