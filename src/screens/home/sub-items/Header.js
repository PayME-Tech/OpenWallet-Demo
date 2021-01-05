/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {ImagesSVG} from '../../../assets/Image';
import {IconButton} from '../../../components/IconButton';

export const Header = ({openPopupInputPhone}) => {
  return (
    <View style={styles.header}>
      <View style={styles.header__top}>
        <Text style={styles.txtHeader}>Ứng dụng của bạn</Text>

        <TouchableOpacity style={styles.changeField__container}>
          <Text style={styles.txtChangeField}>Đổi lĩnh vực</Text>
          <ImagesSVG.IconColor />
        </TouchableOpacity>
      </View>

      <View style={styles.header__bottom}>
        <TouchableOpacity style={styles.accountContainer} onPress={() => openPopupInputPhone?.()}>
          <ImagesSVG.IconAvatar />
          <View style={styles.account__right}>
            <View style={styles.account__lable__container}>
              <Text style={styles.txtAccount}>Tài khoản</Text>
              <IconButton source={<ImagesSVG.IconRefresh />} />
            </View>

            <Text style={styles.txtAccount}>0983000300</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.balance__container}>
          <ImagesSVG.IconWallet style={{marginTop: 5}} />

          <View style={styles.balance__content}>
            <Text style={styles.txtBalanceLable}>Số dư khả dụng</Text>
            <Text style={styles.txtBalance}>0 đ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  header__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.indigoBlue,
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
    backgroundColor: Colors.purpleishBlue,
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
    height: 14,
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
