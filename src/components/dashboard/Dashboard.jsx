import { View, Text } from 'react-native'
import {useState, useEffect, useContext} from 'react'
import { useSelector } from 'react-redux';
import {AxiosContext} from '../../services/api.jsx';
import WorkoutList from '../WorkoutList/WorkoutList.jsx';
import _ from "lodash";
import DSText from '../base/Text/DSText.jsx';

export default function Dashboard() {
    const authState = useSelector(state => state.userAuth);
    const {publicAxios, authAxios} = useContext(AxiosContext);
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        authAxios.get('/workoutlist').then(res => {
            var workoutRes = _.get(res, 'data');
            setWorkouts(workoutRes);
        });
    }, [authState.accessToken]);

    return (
    <View>
        <DSText text={'Hello, ' + authState.user.first_name}></DSText>
        <WorkoutList workouts={workouts}></WorkoutList>
    </View>
    )
}