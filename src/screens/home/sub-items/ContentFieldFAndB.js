/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  // StyleSheet,
  // Text,
  // TouchableOpacity,
  View,
} from 'react-native';
// import {Colors} from '../../../assets/Colors';
// import {Fonts} from '../../../assets/Fonts';
// import {Images, ImagesSVG} from '../../../assets/Image';
// import {SCREEN_SIZE} from '../../../configs/variables.config';

// const DATA = [
//   {key: '1', name: 'Tất cả', image: 'https://picsum.photos/100'},
//   {key: '2', name: 'Cơm', image: 'https://picsum.photos/100'},
//   {key: '3', name: 'Nhậu', image: 'https://picsum.photos/100'},
//   {key: '5', name: 'Lai Rai', image: 'https://picsum.photos/100'},
//   {key: '4', name: 'Lẫu', image: 'https://picsum.photos/100'},
// ];

// const DATA2 = [
//   {
//     key: '1',
//     name: 'Combo Humberger 2 lớp',
//     price: '69,000 đ',
//     image: 'https://picsum.photos/1000/500',
//   },
//   {
//     key: '2',
//     name: 'Pizza Hải Sản Trung Mỹ',
//     price: '269,000 đ',
//     image: 'https://picsum.photos/1000/500',
//   },
//   {
//     key: '3',
//     name: 'Phở Việt Nam',
//     price: '999,000 đ',
//     image: 'https://picsum.photos/1000/500',
//   },
// ];

export const ContentFieldFAndB = () => {
  return (
    <>
      {/* <View style={{height: '16%'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.listService__container}>
          {DATA.map((item) => (
            <TouchableOpacity key={item.key} style={styles.item__container}>
              <View style={styles.image}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 70, height: 70, borderRadius: 35}}
                />
              </View>

              <Text style={styles.txtNameService}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{flex: 1}}>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.productList__container}>
          {DATA2.map((item) => (
            <TouchableOpacity
              activeOpacity={1}
              key={item.key}
              style={styles.productItem__container}>
              <View style={{flex: 1}}>
                <Image
                  source={Images.BannerSample}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
              </View>

              <View style={styles.txtContent}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Text style={styles.txtNameProduct}>{item.name}</Text>
                    <Text style={styles.txtPrice}>{item.price}</Text>
                  </View>

                  <View style={{position: 'absolute', right: 10}}>
                    <ImagesSVG.IconColor fill="#ccc" />
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text style={styles.txtDescTitle}>Loại món</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.txtDesc1}>Burger</Text>
                      <Text style={styles.txtDesc1}>American</Text>
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.txtDescTitle}>Thời gian</Text>
                    <Text style={styles.txtDesc2}>30-40 min</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.txtDescTitle}>Đánh giá</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.txtDesc2}>4.3</Text>
                      <ImagesSVG.IconColor
                        fill="#ccc"
                        width={12}
                        height={12}
                        style={{marginHorizontal: 5}}
                      />
                      <Text
                        style={[styles.txtDesc2, {color: Colors.warmGreyFour}]}>
                        (500+)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          <View style={{width: '100%', height: 1, marginTop: 80}} />
        </ScrollView>
      </View> */}

      <ScrollView bounces={false}>
        <View style={{width: '100%', paddingBottom: 20}}>
          <Image
            source={require('../../../assets/images/png/bodyContent2.png')}
            style={{width: '100%'}}
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   listService__container: {},
//   image: {
//     borderWidth: 2,
//     borderRadius: 35,
//     borderColor: Colors.white,
//   },
//   item__container: {
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   txtNameService: {
//     fontFamily: Fonts.MainSemiBold,
//     fontSize: 14,
//     color: Colors.white,
//   },
//   productList__container: {
//     alignItems: 'center',
//   },
//   productItem__container: {
//     width: SCREEN_SIZE.WIDTH - 30,
//     height: SCREEN_SIZE.HEIGHT * 0.3,
//     marginTop: 20,
//     backgroundColor: Colors.white,
//     borderRadius: 20,
//   },
//   txtNameProduct: {
//     fontFamily: Fonts.MainSemiBold,
//     fontSize: 18,
//     color: Colors.blackFour,
//   },
//   txtPrice: {
//     fontFamily: Fonts.MainMedium,
//     fontSize: 14,
//     color: Colors.blackFour,
//   },
//   txtDescTitle: {
//     fontFamily: Fonts.MainBold,
//     fontSize: 12,
//     color: Colors.warmGreyThree,
//   },
//   txtDesc1: {
//     fontFamily: Fonts.MainBold,
//     fontSize: 12,
//     color: Colors.lightishRed,
//     marginLeft: 5,
//   },
//   txtDesc2: {
//     fontFamily: Fonts.MainBold,
//     fontSize: 14,
//     color: Colors.blackFour,
//   },
//   txtContent: {
//     flex: 1,
//     backgroundColor: Colors.white,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 10,
//     top: -15,
//   },
// });
