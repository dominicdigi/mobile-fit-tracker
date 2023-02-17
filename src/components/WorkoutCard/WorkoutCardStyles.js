import { StyleSheet } from 'react-native';
import { darkGrey, secondary, primary3 } from '../../styles/colors';

const styles = StyleSheet.create({
    cardContainer: {
      marginTop: 10,
      backgroundColor: darkGrey,
      borderColor: secondary,
      borderRadius: 15,
      borderWidth: 2,
      margin: 10,
    },
    cardDetailContainer: {
      padding: 20,
    },
    cardDetailHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 6,
    }, 
    borderProgressWrapper : {
      width: '100%',
      position: 'relative',
    },
    borderProgressBar: {
      backgroundColor: secondary,
      height: 2, 
    }, 
    borderBar: {
      backgroundColor: secondary,
      height: 1, 
      width: '100%',
      opacity: 50,
    },
    cardButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      width: '100%',
      backgroundColor: primary3,
      borderRadius: 15,
    }, 
    gridHeader: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 6,
    },
    gridHeaderColumn: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    gridItem: {
      flexDirection: 'row',
      paddingTop: 4,
    },
    gridColumn: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    checkIcon : {
      backgroundColor: secondary,
      padding: 3,
      borderRadius: 50
    }
  });

export default styles;