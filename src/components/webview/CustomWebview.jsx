import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export default function CustomWebview() {
  return (
    <WebView 
    // userAgent={DeviceInfo.getUserAgent() + " - dominate-training-app "}
    userAgent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
    source={{ uri: 'http://localhost:3001/auth/login/google' }} 
    style={{
          height: 200
      }} />
  )
}