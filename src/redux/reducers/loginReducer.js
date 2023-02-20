import { ADD_USER, ADD_ACCESS_TOKEN, ADD_REFRESH_TOKEN } from "../actions/loginActions";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case ADD_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload
      };
    }
    case ADD_REFRESH_TOKEN: {
      return {
        ...state,
        refreshToken: action.payload
      };
    }
    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //transforms: [encryptor],
};

const loginReducer = persistReducer(persistConfig, reducer);

export default loginReducer;