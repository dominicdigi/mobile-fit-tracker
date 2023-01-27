import axios from "axios";

const baseURL = 'http://localhost:3001';
//process.env.REACT_APP_SERVER_BASE_URL && process.env.REACT_APP_SERVER_PORT ? (process.env.REACT_APP_SERVER_BASE_URL + ":" + process.env.REACT_APP_SERVER_PORT) : "http://localhost:3001";

// TODO get access token from local storage
// var dtAccessToken = getCookie('dtAccessToken');
   
// const api = axios.create({
//  baseURL: baseURL,
//  headers: {
//     authorization: dtAccessToken ? `Bearer ${dtAccessToken}` : ''
//  }
// });

// intercept 401 responses to check if access token is expired and refresh
api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error && error.response && error.response.status === 401 && error.response.data === "Access Token Expired") {
        // TODO pass refresh token to auth/token endpoint to refresh access token
        if(dtAccessToken){
            api.post('/auth/token',{},{withCredentials: true}).then(res => {
               // TODO update local storage with new access token
            }).catch(function (error) {
                //TODO clear out access token from local storage 
                console.log(error);
            });
        }
    }
    return Promise.reject(error);
  });

export {api, baseURL}