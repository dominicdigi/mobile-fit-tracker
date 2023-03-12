import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import DTText from '../Base/Text/DTText';

export default function WorkoutList(props) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    title: {
      marginLeft: 10, 
    }
  });

  const renderItem = ({ item }) => {
    return <WorkoutCard workout={item}></WorkoutCard>;
  };

  return (
    <View style={styles.container}>
      <DTText style={styles.title} text={'Workout History'}></DTText>
      {/* loop through workouts and display cards */}
      <FlatList
        data={props.workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.workoutId}
      />
    </View>
  )
}