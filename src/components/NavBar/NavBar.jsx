import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import DTText from '../Base/Text/DTText'
import { StyleSheet } from 'react-native'
import { Profile, Bars, Add } from '../../assets/icons/svgs'
import { white } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

export default function NavBar() {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            paddingTop: 10,
            borderTopColor: '#ffffff30',
            borderTopWidth: 2,
        },
        navItemWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
      });
    
      function navigateToPage(page){
        navigation.navigate(page)
      }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItemWrapper} onPress={() => navigateToPage('Home')}><Bars height={20} width={20} stroke={white}></Bars><DTText text={'History'}></DTText></TouchableOpacity>
      <TouchableOpacity style={styles.navItemWrapper} onPress={() => navigateToPage('WorkoutDetail')}><Add height={20} width={20} stroke={white}></Add><DTText text={'New Workout'}></DTText></TouchableOpacity>
      <TouchableOpacity style={styles.navItemWrapper} onPress={() => navigateToPage('Profile')}><Profile height={20} width={20} stroke={white} fill={white}></Profile><DTText text={'Profile'}></DTText></TouchableOpacity>
    </View>
  )
}