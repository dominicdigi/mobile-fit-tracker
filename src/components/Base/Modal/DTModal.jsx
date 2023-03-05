import { View, Modal } from 'react-native'
import React from 'react'
import DTText from '../Text/DTText'
import DTButton from '../Button/DTButton';
import styles from './DTModalStyles';

export default function DTModal(props) {
    // Header - Title + Close Button
    // Body
    // Footer - Primary Button 
    const { show } = props;

  return (
    <Modal visible={show} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
                <View>
                    <DTText text={props.headerText}></DTText>
                    <DTButton text='close'></DTButton>
                </View>
                <View>{props.body}</View>
            </View>
        </View>
    </Modal>
  )
}