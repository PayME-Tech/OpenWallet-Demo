/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {ImagesSVG} from '../../../assets/Image';
import {ModalizeTransparent} from '../../../components/ModalizeTransparent';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../../assets/Fonts';
import {IconButton} from '../../../components/IconButton';
import {useDispatch} from 'react-redux';
import {updateApp} from '../../../redux/slices/app.slice';
import {FIELDS} from '../../../configs/variables.config';

const DATA = [
  {
    id: '1',
    key: FIELDS.SUPERMARKET,
    title: 'Siêu thị',
    desc: 'Bán hàng nhu yếu phẩm, quy mô.',
    colors: [Colors.strongPink78, Colors.deepPink],
  },
  {
    id: '2',
    key: FIELDS.FIELD_FANDB,
    title: 'Lĩnh vực F&B',
    desc: 'Ngành thực phẩm và dịch vụ ăn uống',
    colors: [Colors.lightishBlue, Colors.purplyBlueTwo],
  },
  {
    id: '3',
    key: FIELDS.HOTEL,
    title: 'Khách sạn, nghỉ dưỡng',
    desc: 'Đặt phòng khách sạn, motel, biệt thự…',
    colors: [Colors.orangeYellow, Colors.brightOrange],
  },
];

export const PopupChangField = ({modalRef}) => {
  const dispatch = useDispatch();

  const closeModal = () => modalRef?.current?.close();

  const handlePressDefault = () => {
    dispatch(
      updateApp({
        colors: [Colors.vibrantGreen, Colors.emeraldGreenThree],
        field: FIELDS.DEFAULT,
      }),
    );
    closeModal();
  };

  const handlePressItem = (item) => {
    if (item.key === FIELDS.TRAVELTOUR) {
      handlePressDefault();
      return;
    }
    dispatch(
      updateApp({
        colors: item.colors,
        field: item.key,
      }),
    );
    closeModal();
  };

  return (
    <ModalizeTransparent ref={modalRef}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtHeaderTitle}>Chọn lĩnh vực tham khảo</Text>
          <IconButton source={<ImagesSVG.IconClose />} onPress={closeModal} />
        </View>

        <View style={styles.listField}>
          {DATA.map((item) => (
            <LinearGradient
              key={item.id}
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              colors={item.colors}
              style={{marginTop: 10, borderRadius: 15}}>
              <TouchableOpacity
                style={styles.item__container}
                onPress={() => handlePressItem(item)}>
                <Text style={styles.txtTitle}>{item.title}</Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.txtDesc}>
                  {item.desc}
                </Text>

                <View style={styles.iconArrow}>
                  <ImagesSVG.IconArrow />
                </View>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePressDefault}>
          <Text style={styles.txtBtn}>Về mặc định</Text>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.kellyGreenTwo,
    paddingVertical: 10,
  },
  txtHeaderTitle: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: 16,
    color: Colors.blackSeven,
  },
  txtDesc: {
    fontFamily: Fonts.MainLight,
    fontSize: 14,
    color: Colors.white,
  },
  txtBtn: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: 18,
    color: Colors.kellyGreen,
  },
  txtTitle: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: 18,
    color: Colors.white,
  },
  item__container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconArrow: {
    position: 'absolute',
    right: 20,
  },
});
