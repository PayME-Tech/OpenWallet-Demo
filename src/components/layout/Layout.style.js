import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../assets/Colors';
import {SCREEN_SIZE} from '../../configs/variables.config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.deepBlue,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  viewHolder: {
    position: 'absolute',
    width: SCREEN_SIZE.WIDTH,
    height: SCREEN_SIZE.HEIGHT / 2,
    bottom: 0,
    backgroundColor: Colors.white,
  },
});
