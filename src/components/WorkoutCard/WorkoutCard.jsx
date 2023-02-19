import { View, FlatList} from 'react-native'
import {React, useEffect, useState} from 'react'
import DTText from '../Base/Text/DTText';
import DTButton from '../Base/Button/DTButton';
import dateFormat from "dateformat";
import _ from "lodash";
import {CheckIcon} from '../../assets/icons/svgs'
import styles from './WorkoutCardStyles';
import { darkGrey2 } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

export default function WorkoutCard(props) {
  const [exercisesCompleted, setExercisesCompleted] = useState([]);
  const [workoutCompletionPercentage, setWorkoutCompletionPercentage] = useState(0);
  const navigation = useNavigation();

    useEffect(() => {
      const exercises = props.workout.exercises;
      var exercisesCompleted = [];
      var totalSetCount = 0;
      var completedSetCount = 0;

      _.forEach(exercises, function(exercise) {
          var exerciseCompleted = true;
          exercise.sets.forEach(function (set, index) {
              if(!set.completed){
                  exerciseCompleted = false;
              }
              else {
                  completedSetCount++;
              }
              totalSetCount++;
          });
          if(exerciseCompleted){
              exercisesCompleted.push(exercise.exercise_id);
          }
      });
      if(totalSetCount !== 0){
          var workoutCompletion = Math.round(completedSetCount/totalSetCount*100);
          setWorkoutCompletionPercentage(workoutCompletion);
      }
      else {
          setWorkoutCompletionPercentage(100);
      }
      setExercisesCompleted(exercisesCompleted);
  }, []);


  const GridItem = ({ item }) => {
    return (
      <View style={styles.gridItem}>
        <View style={[styles.gridColumn, {width: '70%'}]}>
          <DTText text={item.ex_name} fontSize={12}></DTText>
        </View>
        <View style={[styles.gridColumn, {width: '15%'}]}>
          <DTText text={item.sets.length} fontSize={12}></DTText>
        </View>
        <View style={[styles.gridColumn, {width: '15%'}]}>
          {exercisesCompleted.some(exercise => exercise === item.exercise_id) && <View style={styles.checkIcon}><CheckIcon height={10} width={10}></CheckIcon></View>}
        </View>
      </View>
    );
  };

  const editWorkoutClick = () => {
    const workoutId = props.workout ? props.workout.workout_id : 0;
    if(workoutId){
      navigation.navigate('WorkoutDetail', { workoutId: workoutId});
    }
  };

  const GridHeader = () => {
    return (
      <View style={styles.gridHeader}>
        <View style={[styles.gridHeaderColumn, {width: '70%'}]}>
          <DTText color={darkGrey2} text={'Name'} fontSize={12}></DTText>
        </View>
        <View style={[styles.gridHeaderColumn, {width: '15%'}]}>
          <DTText color={darkGrey2} text={'Sets'} fontSize={12}></DTText>
        </View>
        <View style={[styles.gridHeaderColumn, {width: '15%'}]}>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardDetailContainer}>
        <View style={styles.cardDetailHeader}>
          <DTText text={props.workout.name} fontSize={16} width={'55%'} fontWeight={'600'}></DTText>
          <DTText text={dateFormat(props.workout.date, "mmm. d - yyyy", true)} fontSize={12} width={'25%'}></DTText>
        </View>
        <View style={styles.borderProgressWrapper}>
          <View style={[styles.borderProgressBar, {width: workoutCompletionPercentage + "%"}]}></View>
          <View style={styles.borderBar}></View>
        </View>
        <GridHeader />
        <FlatList
          data={props.workout.exercises}
          numColumns={1}
          renderItem={({ item }) => <GridItem item={item} />}
          keyExtractor={item => item.exercise_id}
        />
      </View>
      <DTButton text={'Edit Workout'} onClick={editWorkoutClick}></DTButton>
    </View>
  )
}