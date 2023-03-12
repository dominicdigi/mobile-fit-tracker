import { StyleSheet } from "react-native";
import { darkGrey, secondary } from '../../styles/colors';

const styles = StyleSheet.create({
    exerciseWrapper: {
      backgroundColor: darkGrey,
      margin: 10, 
      padding: 10,
      borderRadius: 15, 
      borderColor: secondary,
      borderWidth: 2,
    },
    headerWrapper: {
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    menuIcon: {
      display: 'flex'
    },
    gridHeaderWrapper: {
      display: 'flex',
      flexDirection: 'row', 
    },
    bottomContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 8
    }
  });

export default styles;