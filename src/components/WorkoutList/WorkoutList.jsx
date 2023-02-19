import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import DTText from '../Base/Text/DTText';

export default function WorkoutList(props) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
  });

  const renderItem = ({ item }) => {
    return <WorkoutCard workout={item}></WorkoutCard>;
  };

  return (
    <View style={styles.container}>
      <DTText text={'Workout History'}></DTText>
      {/* loop through workouts and display cards */}
      <FlatList
      data={props.workouts}
      renderItem={renderItem}
      keyExtractor={(item) => item.workout_id}
    />
      {/* {props.workouts.map((el, index) => {
        return (
            <WorkoutCard workout={el}></WorkoutCard>
        )
      })} */}
    </View>
  )
}