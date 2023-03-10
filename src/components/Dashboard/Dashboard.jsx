import { View, Text } from 'react-native'
import {useState, useEffect, useContext} from 'react'
import { useSelector } from 'react-redux';
import {AxiosContext} from '../../services/api.jsx';
import WorkoutList from '../WorkoutList/WorkoutList.jsx';
import _ from "lodash";
import DTText from '../Base/Text/DTText.jsx';
import { black } from '../../styles/colors.js';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
    const authState = useSelector(state => state.userAuth);
    const {publicAxios, authAxios} = useContext(AxiosContext);
    const [workouts, setWorkouts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // TODO make this authorized call
        authAxios.get('/workoutlist').then(res => {
            var workoutRes = _.get(res, 'data');
            setWorkouts(workoutRes);
        }).catch(function (error) {
            // unauthorized
            if(error.response.status===401){
                navigation.navigate('Login');
            }
        });
    }, [authState.accessToken]);

    return (
    <View style={{ flex: 1, backgroundColor: black, height: '100%' }}>
        {/* <DTText text={'Hello, ' + authState.user.first_name}></DTText> */}
        <WorkoutList workouts={workouts}></WorkoutList>
    </View>
    )
}