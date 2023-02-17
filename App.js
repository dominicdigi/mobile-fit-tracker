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

import Login from './src/components/login/Login.jsx';
import Dashboard from './src/components/dashboard/Dashboard.jsx';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import {AxiosProvider} from './src/services/api.jsx';

const App: () => Node = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? black : white,
  };

  StatusBar.setBarStyle('light-content', true);

  return (
      <Provider store={store}>
        <AxiosProvider>
          <SafeAreaView style={backgroundStyle}>
          <ScrollView>
            <Login></Login>
            <Dashboard></Dashboard>
          </ScrollView>
          </SafeAreaView>
        </AxiosProvider>
      </Provider>
  );
};

export default App;
