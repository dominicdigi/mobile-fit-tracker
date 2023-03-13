import { View, FlatList } from 'react-native'
import { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AxiosContext } from '../../services/api';
import {useImmer} from 'use-immer';
import produce from 'immer';
import _, { update } from 'lodash';
import dateFormat from 'dateformat';
import styles from './WorkoutDetailStyles';
import DTText from '../Base/Text/DTText';
import DTModal from '../Base/Modal/DTModal';
import WorkoutDate from './WorkoutDate';
import ExerciseDetail from './ExerciseDetail';
import BackNav from '../Base/Navigation/BackNav';
import { secondary,white } from '../../styles/colors';
import DTButton from '../Base/Button/DTButton';
import { Add, CheckIcon } from '../../assets/icons/svgs';

export default function WorkoutDetail({ route }) {
    const { workoutId } = route.params ? route.params : "";
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

    function addSet(exerciseIndex){
      setExercises(exercise => {
        exercise[exerciseIndex].sets[exercise[exerciseIndex].sets.length] = {set_id: exercise[exerciseIndex].sets.length + 1, reps: '', weight: ''};
      });
    }

    function updateSet(ex_id, set_seq, weight, reps, rpe){
      setExercises(exercise => {
        exercise[ex_id].sets[set_seq-1] = {set_id: set_seq, reps: reps, weight: weight, rpe: rpe};
      });
    }


    function initWorkout(exerciseData, workoutData){
      setExercises(exerciseData);
      setWorkout(workoutData);
    }

    useEffect(() => {
      // edit existing workout
      if(workoutId){
        authAxios.get('/mobile/workout/' + workoutId).then(res => {
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

    const renderExerciseDetail = ({item, index}) => {
      return <ExerciseDetail exercise={item} addSet={() => addSet(index)} updateSet={updateSet}></ExerciseDetail>;
    };

  return (
    <View style={styles.workoutDetailContainer}>
      <BackNav></BackNav>
      <View style={styles.titleWrapper}>
        <DTText color={white} text={workout.name}></DTText>
      </View>
      <WorkoutDate workout={workout} setWorkoutDate={setWorkoutDate}></WorkoutDate>
      <DTButton text={'Save'}></DTButton>
      {/* <DTButton text={'Delete Workout'}></DTButton> */}
      <DTButton icon={Add} text={'Add Exercises'} width={'100%'}></DTButton>
      <FlatList
        data={exercises}
        renderItem={renderExerciseDetail}
        keyExtractor={(item) => item.exerciseId}
      />

      <DTModal headerText={'test modal'} show={false}></DTModal>
    </View>
  )
}