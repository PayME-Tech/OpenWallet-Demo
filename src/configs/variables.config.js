import {Dimensions} from 'react-native';

export const LOADING_CONFIG = {
  LOADING_DELAY_TIME: 300,
};

export const SCREEN_SIZE = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export const BUTTON_STATE = {
  UNACTIVE: 'UNACTIVE',
  DISABLE: 'DISABLE',
  ACTIVE: 'ACTIVE',
  CLOSE: 'CLOSE',
};

export const FIELDS = {
  SUPERMARKET: 'SUPERMARKET',
  FIELD_FANDB: 'FIELD_FANDB',
  HOTEL: 'HOTEL',
  TRAVELTOUR: 'TRAVELTOUR',
  DEFAULT: 'DEFAULT',
};
