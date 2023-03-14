import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DTText from '../Text/DTText';
import { ChevronLeft } from '../../../assets/icons/svgs';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function BackNav() {
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    const styles = StyleSheet.create({
        backIconWrapper: {
          width: 35
        },
      });

    return (
    <TouchableOpacity style={styles.backIconWrapper} onPress={() => navigateBack()}>
        <ChevronLeft height={30} width={30}></ChevronLeft>
    </TouchableOpacity>
    )   
}