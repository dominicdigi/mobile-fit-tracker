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
import NavBar from './src/components/NavBar/NavBar.jsx';

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
                <NavBar></NavBar>
              </NavigationContainer>
            </SafeAreaView>
          </AxiosProvider>
        </PersistGate>
      </Provider>
  );
};

export default App;
