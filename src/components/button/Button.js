import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.style';
import {Colors} from '../../assets/Colors';
import {BUTTON_STATE} from '../../configs/variables.config';

export const Button = ({
  onPress,
  loading,
  title,
  type = BUTTON_STATE.ACTIVE,
  style,
  disableloadingButton,
  textStyle,
  iconLeft = null,
}) => {
  const getButtonStyle = () => {
    //   if (type === buttonState.UNACTIVE) {
    //  return styles.btnUnSubmit
    // }
    if (type === BUTTON_STATE.DISABLE) {
      return {backgroundColor: Colors.pinkishGrey};
    }
    if (type === BUTTON_STATE.CLOSE) {
      return {
        backgroundColor: Colors.white,
        borderColor: Colors.squash,
        borderWidth: 1,
      };
    }
    return {backgroundColor: Colors.squash};
  };
  const getButtonTextColor = () => {
    //    if (type === buttonState.UNACTIVE) {
    //  return styles.txtUnSubmit
    // }
    // if (type === buttonState.DISABLE) {
    //  return styles.txtDisable
    // }
    if (type === BUTTON_STATE.CLOSE) {
      return Colors.squash;
    }
    return Colors.white;
  };

  return (
    <TouchableOpacity
      style={[styles.container, getButtonStyle(), style]}
      disabled={loading}
      activeOpacity={type === BUTTON_STATE.DISABLE ? 1 : 0.8}
      onPress={() => {
        if (type !== BUTTON_STATE.DISABLE) {
          onPress && onPress();
        }
      }}>
      {loading && !disableloadingButton ? (
        <ActivityIndicator
          size="small"
          color={Colors.white}
          style={styles.indicator}
        />
      ) : (
        <>
          {iconLeft}
          <Text
            style={[styles.txtTitle, {color: getButtonTextColor()}, textStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};
