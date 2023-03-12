import { StyleSheet } from 'react-native';
import { black, secondary} from '../../styles/colors';

const styles = StyleSheet.create({
    workoutDetailContainer: {
        backgroundColor: black,
        flex: 1,
    },
    titleWrapper: {
      display: 'flex',
      //flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    }
  });

export default styles;