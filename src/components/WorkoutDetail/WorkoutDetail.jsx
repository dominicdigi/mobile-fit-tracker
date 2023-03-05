import { View, FlatList } from 'react-native'
import { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AxiosContext } from '../../services/api';
import {useImmer} from 'use-immer';
import produce from 'immer';
import _ from 'lodash';
import dateFormat from 'dateformat';
import styles from './WorkoutDetailStyles';
import DTText from '../Base/Text/DTText';
import DTModal from '../Base/Modal/DTModal';
import WorkoutDate from './WorkoutDate';
import ExerciseDetail from './ExerciseDetail';
import BackNav from '../Base/Navigation/BackNav';

export default function WorkoutDetail({ route }) {
    const { workoutId } = route.params;
    const {authAxios} = useContext(AxiosContext);
    const [workout, setWorkout] = useImmer({}); // workout details
    const [exercises, setExercises] = useImmer({}); // exercises in the workout
    const navigation = useNavigation();

    function setWorkoutDate(date){
      const nextState = produce(workout, draftState => {
        draftState.date = date ? dateFormat(date, "isoDateTime", true) : '';
      });
      setWorkout(nextState);
    }


    function initWorkout(exerciseData, workoutData){
      setExercises(exerciseData);
      setWorkout(workoutData);
    }

    useEffect(() => {
      // edit existing workout
      if(workoutId){
        authAxios.get('/workout/' + workoutId).then(res => {
            const workoutDetailRes = _.get(res, 'data');
            const exerciseRes = workoutDetailRes.exercises ? workoutDetailRes.exercises : {};
            const workoutRes = workoutDetailRes.workout ? workoutDetailRes.workout : {};
            initWorkout(exerciseRes, workoutRes);
        }).catch(function (error) {
          // unauthorized
          if(error.response.status===401){
            navigation.navigate('Login');
          }
        });
      }
      else {
        // create new workout
        initWorkout({}, {});
      }
    }, [workoutId]);

    const renderExerciseDetail = ({ item }) => {
      return <ExerciseDetail></ExerciseDetail>;
    };

  return (
    <View style={styles.workoutDetailContainer}>
      <BackNav></BackNav>
      <DTText text={workout.name}></DTText>
      <WorkoutDate workout={workout} setWorkoutDate={setWorkoutDate}></WorkoutDate>
      {/* <FlatList
        data={exercises}
        renderItem={renderExerciseDetail}
        keyExtractor={(item) => item.exercise_id}
      /> */}

      <DTModal headerText={'test modal'} show={false}></DTModal>
    </View>
  )
}