import { View, StyleSheet } from 'react-native'
import React from 'react'
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import DSText from '../base/Text/DSText';

export default function WorkoutList(props) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
  });


  return (
    <View style={styles.container}>
      <DSText text={'Workout History'}></DSText>
      {/* loop through workouts and display cards */}
      {props.workouts.map((el, index) => {
        return (
            <WorkoutCard workout={el}></WorkoutCard>
        )
      })}
    </View>
  )
}