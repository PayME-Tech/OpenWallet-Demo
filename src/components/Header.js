import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../assets/Colors';
import {Fonts} from '../assets/Fonts';
import {IconButton} from './IconButton';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //height: Platform.OS === 'ios' ? 44 : 56,
    paddingTop: 8,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Fonts.MainMedium,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  imageLeft: {
    width: 25,
    height: 25,
  },
});

export const Header = React.memo(
  ({
    title,
    onPressRight,
    onPressLeft,
    imageLeft,
    titleStyle,
    imageRight,
    backgroundColor = 'transparent',
    barStyle = 'light-content',
    gradientStart,
    gradientEnd,
    customRightComponent = null,
    children,
  }) => {
    return (
      <LinearGradient
        colors={[
          gradientStart ?? Colors.trueBlue,
          gradientEnd ?? Colors.deepBlue,
        ]}>
        <SafeAreaView />
        <StatusBar
          barStyle={barStyle}
          translucent
          backgroundColor={backgroundColor}
        />
        <View style={styles.container}>
          <View style={styles.left}>
            {onPressLeft ? (
              <IconButton
                onPress={() => {
                  onPressLeft && onPressLeft();
                }}
                source={imageLeft}
              />
            ) : null}
          </View>
          {children ?? <Text style={[styles.text, titleStyle]}>{title}</Text>}
          <View style={styles.right}>
            {onPressRight ? (
              <IconButton
                onPress={() => {
                  onPressRight && onPressRight();
                }}
                source={imageRight}
              />
            ) : null}
            {customRightComponent}
          </View>
        </View>
      </LinearGradient>
    );
  },
);
