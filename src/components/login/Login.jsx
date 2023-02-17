import { View, Text } from 'react-native'
import React from 'react'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addAccessToken, addRefreshToken, addUser } from '../../redux/actions/loginActions';

export default function Login() {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '935356266275-gbp522qsjmtns3ujt84ulgo60vatvan6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
        iosClientId: '935356266275-gbkb2n1g354k4mbavda6mgfpq8pcr1vj.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    const dispatch = useDispatch();
    const authState = useSelector(state => state.userAuth);

    const signIn = async () => {
        try {
            var userInfo = await GoogleSignin.signIn();
            if(userInfo && userInfo.idToken){
                userInfo = {"idToken": userInfo.idToken, "user": userInfo.user ? userInfo.user : ''};
                axios({
                method: 'post',
                url: 'http://localhost:3001/auth/google/verify',
                data: userInfo
                }).then(res => {
                    if(res && res.data){
                        dispatch(addAccessToken(res.data.accessToken));
                        dispatch(addRefreshToken(res.data.refreshToken));
                        dispatch(addUser(res.data.user));
                    }
                }).catch(function (error){
                    console.log(error);
                });
            }
            else {
                // show message to user that login was unsuccesful
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

  return (
    <View>
      <Text>Hello, {authState.user.first_name}</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
        // disabled={this.state.isSigninInProgress}
        />
    </View>
  )
}