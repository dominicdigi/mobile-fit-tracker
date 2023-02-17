import React, {createContext, useContext} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
  const authState = useSelector(state => state.userAuth);

  const authAxios = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const publicAxios = axios.create({
    baseURL: 'http://localhost:3001',
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization && authState && authState.accessToken) {
        config.headers.Authorization = `Bearer ${authState.accessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </Provider>
  );
};

export {AxiosContext, AxiosProvider};