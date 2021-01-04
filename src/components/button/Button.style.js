import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets/Fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 28,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    width: '100%',
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: Fonts.MainSemiBold,
  },
});
