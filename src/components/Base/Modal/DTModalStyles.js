import { StyleSheet } from 'react-native';
import { darkGrey } from '../../../styles/colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
    modalContainer: {
      width: '75%',
      margin: 20,
    backgroundColor: darkGrey,
    borderRadius: 20,
      padding: 35,
      alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    }
});

export default styles;