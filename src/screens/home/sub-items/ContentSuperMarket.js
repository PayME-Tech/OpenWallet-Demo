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
// import {ImagesSVG} from '../../../assets/Image';
// import {SCREEN_SIZE} from '../../../configs/variables.config';

// const DATA = {
//   listService: [
//     {id: '1', title: 'Khuyến mãi', icon: <ImagesSVG.IconWater />},
//     {id: '2', title: 'Cửa hàng', icon: <ImagesSVG.IconWater />},
//     {id: '3', title: 'Ly cốc', icon: <ImagesSVG.IconWater />},
//     {id: '4', title: 'Làm bếp', icon: <ImagesSVG.IconWater />},
//     {id: '5', title: 'Gia dụng', icon: <ImagesSVG.IconWater />},
//     {id: '6', title: 'Thực phẩm', icon: <ImagesSVG.IconWater />},
//     {id: '7', title: 'Bình nước', icon: <ImagesSVG.IconWater />},
//     {id: '8', title: 'Khác', icon: <ImagesSVG.IconWater />},
//   ],
//   products: [
//     {
//       id: '1',
//       name: 'Táo đỏ',
//       price: '95,000 đ / kg',
//       image: 'https://picsum.photos/250/300',
//     },
//     {
//       id: '2',
//       name: 'Cherry',
//       price: '340,000 đ / kg',
//       image: 'https://picsum.photos/250/300',
//     },
//     {
//       id: '3',
//       name: 'Cà Chua',
//       price: '34,000 đ / kg',
//       image: 'https://picsum.photos/250/300',
//     },
//     {
//       id: '4',
//       name: 'Cam sành',
//       price: '33,000 đ / kg',
//       image: 'https://picsum.photos/250/300',
//     },
//   ],
// };

export const ContentSuperMarket = () => {
  return (
    <>
      {/* <View style={styles.listService}>
        {DATA.listService.map((item) => (
          <TouchableOpacity key={item.id} style={styles.item__container}>
            {item.icon}

            <Text style={styles.txtNameService}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
        contentContainerStyle={styles.listProduct}>
        <View style={styles.listProduct__header}>
          <Text style={styles.txtBuyMore}>Đang bán chạy</Text>
          <TouchableOpacity>
            <Text style={styles.txtViewAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.listProduct__container}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {DATA.products.map((item) => (
            <TouchableOpacity key={item.id} style={styles.product__container}>
              <View style={styles.product__textContent}>
                <Text style={styles.txtNameProduct}>{item.name}</Text>
                <Text style={styles.txtPriceProduct}>{item.price}</Text>
              </View>
              <View style={{flex: 1}}>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView> */}

      <ScrollView bounces={false}>
        <View style={{width: '100%', paddingBottom: 20}}>
          <Image
            source={require('../../../assets/images/png/contentBody.png')}
            style={{width: '100%'}}
          />
        </View>
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   listService: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: SCREEN_SIZE.WIDTH - 30,
//     backgroundColor: Colors.white,
//     alignSelf: 'center',
//     padding: 15,
//     borderTopLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     borderTopRightRadius: 40,
//     borderBottomLeftRadius: 40,
//   },
//   item__container: {
//     width: '25%',
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   txtNameService: {
//     fontFamily: Fonts.MainRegular,
//     fontSize: 13,
//     color: Colors.warmGreyTwo,
//   },
//   listProduct__container: {
//     marginTop: 5,
//   },
//   listProduct: {
//     paddingLeft: 15,
//     paddingBottom: 90,
//   },
//   product__container: {
//     width: SCREEN_SIZE.WIDTH * 0.4,
//     height: SCREEN_SIZE.HEIGHT * 0.4,
//     marginRight: 10,
//     backgroundColor: Colors.white,
//     borderTopLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 20,
//     borderWidth: 1,
//   },
//   listProduct__header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingRight: 15,
//     alignItems: 'center',
//   },
//   txtBuyMore: {
//     fontFamily: Fonts.MainSemiBold,
//     fontSize: 16,
//     color: Colors.blackThirteen,
//   },
//   txtViewAll: {
//     fontFamily: Fonts.MainSemiBold,
//     fontSize: 12,
//     color: Colors.squash,
//   },
//   txtNameProduct: {
//     fontFamily: Fonts.MainMedium,
//     fontSize: 16,
//     color: Colors.charcoalGrey,
//   },
//   txtPriceProduct: {
//     fontFamily: Fonts.MainMedium,
//     fontSize: 12,
//     color: Colors.butterscotch,
//   },
//   product__textContent: {
//     padding: 15,
//   },
// });
