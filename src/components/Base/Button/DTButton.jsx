import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, primary3 } from '../../../styles/colors';

export default function DTButton(props) {
  const styles = StyleSheet.create({
      text: {
        fontFamily: 'Poppins-Regular',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
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
    });
    
  const { color = white, fontSize = 12 } = props;
      
  return (
    <TouchableOpacity style={styles.cardButtonContainer} onPress={props.onClick}>
      <Text style={[styles.text, { color, fontSize }]}>
          {props.text}
      </Text>
    </TouchableOpacity>
  )
}