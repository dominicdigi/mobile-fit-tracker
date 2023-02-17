import { ADD_USER, ADD_ACCESS_TOKEN, ADD_REFRESH_TOKEN } from "../actions/loginActions";

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: ''
};

const loginReducer = (state = initialState, action) => {
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

export default loginReducer;