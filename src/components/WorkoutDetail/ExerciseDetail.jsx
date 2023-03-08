import { View, Text } from 'react-native'
import React from 'react'
import DTText from '../Base/Text/DTText'

export default function ExerciseDetail(props) {
  return (
    <View>
      <DTText text={props.exercise && props.exercise.name ? props.exercise.name : ''}></DTText>
    </View>
  )
}