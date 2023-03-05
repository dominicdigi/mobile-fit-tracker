import {useState} from 'react'
import DTText from '../Base/Text/DTText'
import DTDatePicker from '../Base/DatePicker/DTDatePicker'
import dateFormat from 'dateformat';
import { CalendarDays } from '../../assets/icons/svgs';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';

/*
    Clickable date value that opens up a Date Picker for editing
*/
export default function WorkoutDate(props) {
    const [open, setOpen] = useState(false);

    const styles = StyleSheet.create({
        dateWrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center', 
        },
        calendarIconWrapper: {
            paddingRight: 5
        }
      });

    return (
        <View>
            <TouchableOpacity style={styles.dateWrapper} onPress={() => setOpen(true)}>
                <View style={styles.calendarIconWrapper}>
                    <CalendarDays width={25} height={25}></CalendarDays>
                </View>
                <DTText text={dateFormat(props.workout.date, "yyyy-mm-dd", true)}></DTText>
            </TouchableOpacity>
            <DTDatePicker date={props.workout.date} open={open} setOpen={setOpen} setDate={props.setWorkoutDate}></DTDatePicker>
        </View>
    )
}