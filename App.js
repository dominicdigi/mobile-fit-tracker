/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { black, white } from './src/styles/colors.js';
import {store, persistor} from './src/redux/store';
import { Provider } from 'react-redux';
import {AxiosProvider} from './src/services/api.jsx';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator.js';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? black : white,
  };

  StatusBar.setBarStyle('light-content', true);

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AxiosProvider>
            {/* what should the background color of the safearea be? */}
            <SafeAreaView style={{ flex: 1, backgroundColor: black }}>
              <NavigationContainer>
                <StackNavigator />
              </NavigationContainer>
            </SafeAreaView>
          </AxiosProvider>
        </PersistGate>
      </Provider>
  );
};

export default App;
