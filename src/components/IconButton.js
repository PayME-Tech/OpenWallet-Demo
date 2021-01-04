import React from 'react';
import {TouchableOpacity} from 'react-native';

export const IconButton = ({
  style,
  source, //= <ImagesSVG.ArrowBackLongWhite fill={Colors.white} />,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        onPress && onPress();
      }}
      style={style}
      hitSlop={{
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      }}>
      {source}
    </TouchableOpacity>
  );
};
