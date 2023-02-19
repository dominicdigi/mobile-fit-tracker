import { View, Text } from 'react-native'
import { useEffect } from 'react';

export default function WorkoutDetail({ route }) {
    const { workoutId } = route.params;
    useEffect(() => {
        // var workoutId = params && params.workoutId ? params.workoutId : '';
        // if(workoutId){
        //   api.get('/workout/'+workoutId, {withCredentials: true})
        //     .then(res => {
        //       if(res && res.data){
        //         const exerciseRes = res.data.exercises ? res.data.exercises : {};
        //         var workoutRes = res.data.workout ? res.data.workout : {};
    
        //         initWorkout(exerciseRes, workoutRes);
        //       }
        //     }).catch(function (error) {
        //       // unauthorized
        //       if(error.response.status===401){
        //         navigate("/login", { replace: true });
        //       }
        //     });
        // }
        // else {
        //   // create empty workout template
        //   initWorkout({}, {});
        //   setWorkoutDate(dateFormat(new Date(), "isoDateTime", true));
        // }
    });

  return (
    <View>
      <Text>WorkoutDetail {workoutId}</Text>
    </View>
  )
}