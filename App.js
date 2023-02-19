/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import { black, white } from './src/styles/colors.js';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import {AxiosProvider} from './src/services/api.jsx';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator.js';

const App: () => Node = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? black : white,
  };

  StatusBar.setBarStyle('light-content', true);

  return (
      <Provider store={store}>
        <AxiosProvider>
          {/* what should the background color of the safearea be? */}
          <SafeAreaView style={{ flex: 1, backgroundColor: black }}>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </AxiosProvider>
      </Provider>
  );
};

export default App;
