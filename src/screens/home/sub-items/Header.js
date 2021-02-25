/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {ImagesSVG} from '../../../assets/Image';

export const Header = ({openPopupInputPhone, phone, balance, openWallet, openPopupChangField, colors, switchEnv, switchShowLog}) => {
  return (
    <>
    <SafeAreaView />
    <View style={styles.header}>
      <View style={styles.header__top}>
        <TouchableOpacity activeOpacity={1} delayLongPress={3000} onLongPress={() => switchEnv?.()}>
          <Text style={styles.txtHeader}>Ứng dụng của bạn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.changeField__container} onPress={() => openPopupChangField?.()} delayLongPress={3000} onLongPress={() => switchShowLog?.()}>
          <Text style={styles.txtChangeField}>Đổi lĩnh vực</Text>
          <ImagesSVG.IconColor fill={colors[1] || '#000000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.header__bottom}>
        <TouchableOpacity style={styles.accountContainer} onPress={() => openPopupInputPhone?.()}>
          <ImagesSVG.IconAvatar fill="#ffffff" />
          <View style={styles.account__right}>
            <View style={styles.account__lable__container}>
              <Text style={styles.txtAccount}>Tài khoản</Text>
              <ImagesSVG.IconRefresh />
            </View>

            <Text style={styles.txtAccount}>{phone || 'Chưa có'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.balance__container} onPress={() => openWallet?.()}>
          <ImagesSVG.IconWallet style={{marginTop: 5}} />

          <View style={styles.balance__content}>
            <Text style={styles.txtBalanceLable}>Số dư khả dụng</Text>
            <Text style={styles.txtBalance}>{`${balance} đ`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  txtHeader: {
    fontFamily: Fonts.MainBold,
    fontSize: 18,
    color: Colors.white,
  },
  header: {
    padding: 15,
    paddingBottom: 10,
  },
  header__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(204,204,204,0.4)',
  },
  header__bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  changeField__container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountContainer: {
    flexDirection: 'row',
  },
  account__right: {
    marginLeft: 10,
  },
  account__lable__container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  balance__container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 1,
    marginLeft: 20,
    borderRadius: 30,
  },

  txtAccount: {
    fontFamily: Fonts.MainRegular,
    fontSize: 12,
    color: Colors.white,
    marginRight: 5,
  },
  txtBalanceLable: {
    fontFamily: Fonts.MainRegular,
    fontSize: 11,
    color: Colors.white,
    // height: 14,
  },
  txtBalance: {
    fontFamily: Fonts.MainBold,
    fontSize: 17,
    color: Colors.white,
    height: 24,
  },
  txtChangeField: {
    fontFamily: Fonts.MainMedium,
    fontSize: 12,
    color: Colors.blackSeven,
    marginRight: 5,
  },

  balance__content: {
    marginLeft: 10,
  },
});
