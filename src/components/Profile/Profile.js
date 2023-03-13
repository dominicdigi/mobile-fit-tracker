import { View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import DTText from '../Base/Text/DTText';
import { black } from '../../styles/colors';

export default function Profile() {
    const authState = useSelector(state => state.userAuth);
    return (
    <View style={{ flex: 1, backgroundColor: black, height: '100%' }}>
        <DTText text={'Hello, ' + authState.user.first_name}></DTText>
    </View>
    )
}