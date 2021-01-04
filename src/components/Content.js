import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors} from '../assets/Colors';
import {SCREEN_SIZE} from '../configs/variables.config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_SIZE.WIDTH,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 16,
  },
});

export const Content = ({
  style,
  contentContainerStyle,
  scrollEnabled,
  children,
  ...props
}) => {
  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      style={[styles.container, style]}
      contentContainerStyle={contentContainerStyle}
      bounces={false}
      showsVerticalScrollIndicator={false}
      {...props}>
      {children}
    </ScrollView>
  );
};
