import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../assets/Fonts';
import {RF} from '../../helpers/ResponsiveFontSize';

const codeFieldStyles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
    fontSize: RF(1),
    ...Platform.select({
      web: {
        width: '100%',
        // Fix iOS aggressive zoom
        fontSize: 16,
      },
    }),
  },
  textInput1: {
    flex: 1,
    height: 100,
    fontSize: RF(18),
    fontFamily: Fonts.Regular,
    textAlign: 'center',
  },
});
export default codeFieldStyles;
