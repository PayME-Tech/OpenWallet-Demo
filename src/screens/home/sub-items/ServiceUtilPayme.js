import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {SCREEN_SIZE} from '../../../configs/variables.config';
import {getIconService} from '../../../helpers';
import payME from 'react-native-payme-sdk';
import { ImagesSVG } from '../../../assets/Image';

export const ServiceUtilPayme = ({data}) => {
  console.log('==============data', data);
  const handlePressItem = (item) => {
    payME.openService(
      {
        code: item.code,
        description: item.description,
      },
      (response) => {
        console.log('response openService', response);
      },
      (error) => {
        console.log('error', error);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtServicePaymeLable}>Dịch vụ tiện ích PayME</Text>
      {/* <ImagesSVG.iconMoreService /> */}
      <Text style={styles.txtDes}>
        Bạn có thể tích hợp các dịch vụ thanh toán, ứng dụng có thể tích hợp vào
        giao diện ứng dụng của bạn.
      </Text>

      <View style={styles.listService__container}>
        {data?.map((item) => (
          <TouchableOpacity key={item.code} style={styles.item__container} onPress={() => handlePressItem(item)}>
            {getIconService(item.code)}
            <Text style={styles.txtNameService}>{item.description}</Text>
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
    flexWrap: 'wrap',
  },
  item__container: {
    // flex: 1,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
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
