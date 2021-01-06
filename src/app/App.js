/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NavApp from '../navigation';
import {TouchableOpacity} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../redux/redux.store';

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.7,
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />

          <SafeAreaView />

          <NavApp />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
