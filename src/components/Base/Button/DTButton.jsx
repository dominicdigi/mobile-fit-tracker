import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, primary3 } from '../../../styles/colors';

export default function DTButton(props) {
  const styles = StyleSheet.create({
      text: {
        fontFamily: 'Poppins-Regular',
        display: 'flex',
        textAlign: 'center',
      },
      cardButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignSelf: 'center',
        backgroundColor: primary3,
        borderRadius: 15,
      }, 
      icon: {
        paddingRight: 4
      }
    });
    
  const { 
    color = white, 
    fontSize = 12, 
    width = null // set width to null so that it will take the width of the content inside the button
  } = props;
      
  return (
    <TouchableOpacity style={[styles.cardButtonContainer, {width}]} onPress={props.onClick}>
      <View style={styles.icon}>
        {props.icon ? <props.icon height={20} width={20} /> : ''}
      </View>
      <Text style={[styles.text, { color, fontSize }]}>
          {props.text}
      </Text>
    </TouchableOpacity>
  )
}