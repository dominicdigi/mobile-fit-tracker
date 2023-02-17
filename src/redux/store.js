import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/loginReducer';

const store = configureStore({
    reducer: {
      userAuth: loginReducer,
    }
  })

export default store;