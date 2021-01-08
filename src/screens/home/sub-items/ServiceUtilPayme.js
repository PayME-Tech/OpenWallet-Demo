import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {ImagesSVG} from '../../../assets/Image';
import {SCREEN_SIZE} from '../../../configs/variables.config';

const DATA = [
  {key: '1', name: 'ĐT trả sau', icon: <ImagesSVG.IconPostpaid />},
  {key: '2', name: 'Nạp ĐT', icon: <ImagesSVG.IconAdddt />},
  {key: '3', name: 'Nước', icon: <ImagesSVG.IconWater />},
  {key: '4', name: 'Truyền hình', icon: <ImagesSVG.IconTv />},
];

export const ServiceUtilPayme = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtServicePaymeLable}>Dịch vụ tiện ích PayME</Text>
      <Text style={styles.txtDes}>
        Bạn có thể tích hợp các dịch vụ thanh toán, ứng dụng có thể tích hợp vào
        giao diện ứng dụng của bạn.
      </Text>

      <View style={styles.listService__container}>
        {DATA.map((item) => (
          <TouchableOpacity key={item.key} style={styles.item__container}>
            {item.icon}

            <Text style={styles.txtNameService}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 10,
    width: SCREEN_SIZE.WIDTH - 30,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius: 20,
  },
  listService__container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  item__container: {
    flex: 1,
    alignItems: 'center',
  },
  txtServicePaymeLable: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: 16,
    color: Colors.blackSeven,
  },
  txtDes: {
    fontFamily: Fonts.MainMedium,
    fontSize: 11,
    color: Colors.warmGrey,
  },
  txtNameService: {
    fontFamily: Fonts.MainRegular,
    fontSize: 12,
    color: Colors.blackSeven,
    marginTop: 5,
  },
});
