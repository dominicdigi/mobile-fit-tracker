import { View, Text } from 'react-native'
import { useEffect, useContext } from 'react';
import { AxiosContext } from '../../services/api';
import {useImmer} from 'use-immer';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';

export default function WorkoutDetail({ route }) {
    const { workoutId } = route.params;
    const {authAxios} = useContext(AxiosContext);
    const [workout, setWorkout] = useImmer({}); // workout details
    const [exercises, setExercises] = useImmer({}); // exercises in the workout
    const navigation = useNavigation();

    function initWorkout(exerciseData, workoutData){
      setExercises(exerciseData);
      setWorkout(workoutData);
    }

    useEffect(() => {
      // edit existing workout
      if(workoutId){
        // TODO make this authorized call
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

  return (
    <View>
      <Text>WorkoutDetail {workoutId}</Text>
    </View>
  )
}