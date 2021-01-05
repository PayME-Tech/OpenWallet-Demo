import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {Dimensions, Keyboard, SafeAreaView, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Colors} from '../assets/Colors';

const {width, height} = Dimensions.get('window');

export const ModalizeTransparent = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    close: () => {
      modalRef.current?.close();
    },
    open: () => {
      modalRef.current?.open();
    },
  }));

  return (
    <Modalize
      useNativeDrive
      ref={modalRef}
      scrollViewProps={{
        scrollEnabled: false,
        showsVerticalScrollIndicator: false,
        ...props.scrollViewProps,
      }}
      rootStyle={props.rootStyle}
      modalStyle={[styles.modalStyle, props.style]}
      onOpen={async () => {
        Keyboard.dismiss();
      }}
      withHandle={false}
      adjustToContentHeight
      {...props}
      onClose={() => {
        props.onClose && props.onClose();
      }}>
      {<SafeAreaView>{props.children}</SafeAreaView>}
    </Modalize>
  );
});

export const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    shadowColor: 'transparent',
    elevation: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 16,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    zIndex: -99,
    backgroundColor: Colors.darkBlueGrey60,
  },
});
