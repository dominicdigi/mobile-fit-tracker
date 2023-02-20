import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/loginReducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: {
    userAuth: loginReducer,
  }
});

const persistor = persistStore(store);

export { store, persistor };