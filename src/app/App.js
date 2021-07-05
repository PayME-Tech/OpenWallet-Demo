/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import NavApp from '../navigation';
import {TouchableOpacity} from 'react-native';
import * as Sentry from '@sentry/react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../redux/redux.store';
import SplashScreen from 'react-native-splash-screen';

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.7,
};

const App = () => {
  Sentry.init({
    dsn:
      'https://759ec3df6a0c45878d25586e78e9628f@o405361.ingest.sentry.io/5840191',
  });

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <NavApp />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
