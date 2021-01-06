/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  // StyleSheet,
  // Text,
  // TextInput,
  // TouchableOpacity,
  View,
} from 'react-native';
// import {Colors} from '../../../assets/Colors';
// import {Fonts} from '../../../assets/Fonts';
// import {ImagesSVG} from '../../../assets/Image';
// import {SCREEN_SIZE} from '../../../configs/variables.config';

// const DATA = [
//   {
//     id: '1',
//     price: '19tr310 - 21tr900k',
//     desc: '5 phòng ngủ, 1 phòng tắm',
//     address: '15 Nguyễn Cơ Thạch',
//     image: 'https://picsum.photos/500/300',
//   },
//   {
//     id: '2',
//     price: '11tr446k',
//     desc: '5 phòng ngủ, 1 phòng tắm',
//     address: '96 Trần Phú',
//     image: 'https://picsum.photos/500/300',
//   },
//   {
//     id: '3',
//     price: '19tr310 - 21tr900k',
//     desc: '5 phòng ngủ, 1 phòng tắm',
//     address: '123 Nguyễn Cơ Thạch',
//     image: 'https://picsum.photos/500/300',
//   },
// ];

export const ContentHotel = () => {
  // const [searchText, setSearchText] = useState('');

  return (
    <>
      {/* <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ImagesSVG.IconColor fill="#ccc" />
          <Text style={styles.txtPlace}>Hà Nội</Text>
          <ImagesSVG.IconColor fill="#ccc" />

          <View style={{position: 'absolute', right: 0}}>
            <ImagesSVG.IconColor fill="#ccc" />
          </View>
        </View>

        <View style={styles.textInput__conatiner}>
          <TextInput
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            style={styles.textInput}
            placeholder="Tìm kiếm nơi bạn muốn thuê"
            editable={false}
          />
          <ImagesSVG.IconColor fill="#ccc" />
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled
        bounces={false}
        style={{marginTop: 10}}
        contentContainerStyle={{paddingBottom: 80}}>
        <View style={styles.listHightlight}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Text style={styles.txtTitle}>Nổi bật</Text>
            <TouchableOpacity>
              <Text style={styles.txtViewAll}>Xem tẩt cả</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.list__container}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {DATA.map((item) => (
              <TouchableOpacity key={item.id} style={styles.product__container}>
                <Image
                  source={{uri: item.image}}
                  style={{width: '100%', height: '70%', borderRadius: 10}}
                />

                <View style={{flex: 1, paddingLeft: 10, marginTop: 5}}>
                  <Text style={styles.txtPrice}>{item.price}</Text>
                  <Text style={styles.txtDesc}>{item.desc}</Text>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <ImagesSVG.IconColor fill="#ccc" />
                    <Text style={styles.txtAddress}>{item.address}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.listHightlight}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Text style={styles.txtTitle}>Giá đang giảm</Text>
            <TouchableOpacity>
              <Text style={styles.txtViewAll}>Xem tẩt cả</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.list__container}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {DATA.map((item) => (
              <TouchableOpacity key={item.id} style={styles.product__container}>
                <Image
                  source={{uri: item.image}}
                  style={{width: '100%', height: '70%', borderRadius: 10}}
                />

                <View style={{flex: 1, paddingLeft: 10, marginTop: 5}}>
                  <Text style={styles.txtPrice}>{item.price}</Text>
                  <Text style={styles.txtDesc}>{item.desc}</Text>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <ImagesSVG.IconColor fill="#ccc" />
                    <Text style={styles.txtAddress}>{item.address}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView> */}

      <ScrollView bounces={false}>
        <View style={{width: '100%', paddingBottom: 20}}>
          <Image
            source={require('../../../assets/images/png/bodyContent3.png')}
            style={{width: '100%'}}
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: 15,
//   },
//   textInput__conatiner: {
//     backgroundColor: Colors.white,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 15,
//     paddingRight: 15,
//     marginTop: 10,
//   },
//   textInput: {
//     flex: 1,
//     padding: 5,
//     paddingHorizontal: 10,
//     fontFamily: Fonts.MainMedium,
//     fontSize: 14,
//     color: Colors.greyishBrownTwo,
//   },
//   product__container: {
//     height: SCREEN_SIZE.HEIGHT * 0.45,
//     width: SCREEN_SIZE.WIDTH * 0.5,
//     marginRight: 15,
//   },
//   txtPlace: {
//     fontFamily: Fonts.MainMedium,
//     fontSize: 14,
//     color: Colors.white,
//     marginHorizontal: 5,
//   },
//   listHightlight: {
//     marginTop: 15,
//   },
//   txtTitle: {
//     fontFamily: Fonts.MainSemiBold,
//     fontSize: 20,
//     color: Colors.blackThirteen,
//   },
//   txtViewAll: {
//     fontFamily: Fonts.MainSemiBold,
//     fontSize: 12,
//     color: Colors.blackThirteen,
//   },
//   list__container: {
//     paddingLeft: 15,
//   },
//   txtPrice: {
//     fontFamily: Fonts.MainBold,
//     fontSize: 16,
//     color: Colors.purpleishBlueTwo,
//   },
//   txtDesc: {
//     fontFamily: Fonts.MainBold,
//     fontSize: 12,
//     color: Colors.blackFour,
//   },
//   txtAddress: {
//     fontFamily: Fonts.MainBold,
//     fontSize: 10,
//     color: Colors.greyishBrownThree,
//     marginLeft: 5,
//   },
// });
