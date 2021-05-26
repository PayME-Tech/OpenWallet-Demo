import React, {useImperativeHandle, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../assets/Colors';
import {Fonts} from '../../../assets/Fonts';
import {ImagesSVG} from '../../../assets/Image';
import {IconButton} from '../../../components/IconButton';
import {ModalizeTransparent} from '../../../components/ModalizeTransparent';
import {RF} from '../../../helpers/ResponsiveFontSize';
import {updateApp} from '../../../redux/slices/app.slice';
import payME from 'react-native-payme-sdk';

export const PopupNotify = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    open: (type = 'ACTIVE') => {
      setType(type);
      setTimeout(() => {
        modalRef.current?.open();
      }, 100);
    },
  }));

  const modalRef = useRef(null);

  const [type, setType] = useState('ACTIVE');

  const {colors} = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  const closeModal = () => {
    modalRef?.current?.close();
  };

  const handlePressBtn = () => {
    closeModal();
    payME.openWallet(
      (res) => {
        console.log(res);
      },
      (message) => {
        console.log(message);
      },
    );
  };

  return (
    <ModalizeTransparent ref={modalRef} modalStyle={styles.modalStyle}>
      <View style={styles.modalContainer}>
        <IconButton
          source={<ImagesSVG.IcSetClose16Px />}
          onPress={closeModal}
          style={styles.iconClose}
        />

        <Text style={styles.txtMessage}>
          {`Vui lòng ${type === 'ACTIVE' ? 'kích hoạt' : 'định danh'} `}
          <Text style={styles.txtWalletAccount}>tài khoản Ví</Text>
          {'\ntrước khi sử dụng. Xin cảm ơn'}
        </Text>

        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={colors}
          style={{marginTop: 20, borderRadius: 25}}>
          <TouchableOpacity style={styles.button} onPress={handlePressBtn}>
            <Text style={styles.txtBtn}>
              {type === 'ACTIVE' ? 'Kích hoạt' : 'Định danh'}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ModalizeTransparent>
  );
});

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    minHeight: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 15,
    padding: 16,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtMessage: {
    fontFamily: Fonts.MainRegular,
    fontSize: RF(18),
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 16,
  },
  txtWalletAccount: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: RF(18),
    color: Colors.black,
  },
  txtBtn: {
    fontFamily: Fonts.MainSemiBold,
    fontSize: RF(17),
    color: Colors.white,
  },
  iconClose: {
    alignItems: 'flex-end',
  },
});
