export const ADD_USER = "ADD_USER";
export const ADD_REFRESH_TOKEN = "ADD_REFRESH_TOKEN";
export const ADD_ACCESS_TOKEN = "ADD_ACCESS_TOKEN";

export const addUser = user => ({
  type: ADD_USER,
  payload: user
});

export const addRefreshToken = refreshToken => ({
    type: ADD_REFRESH_TOKEN,
    payload: refreshToken 
});

export const addAccessToken = accessToken => ({
    type: ADD_ACCESS_TOKEN,
    payload: accessToken
});