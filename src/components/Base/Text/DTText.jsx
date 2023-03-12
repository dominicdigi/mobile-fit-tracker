import { View, Text, StyleSheet} from 'react-native'
import { white } from '../../../styles/colors';

export default function DTText(props) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Poppins-Regular',
      display: 'flex',
    }
  });

  const { color = white, 
  fontSize = 16, 
  fontWeight = 'normal', 
  width = null } = props;

  return (
    <Text style={[styles.text, { color, fontSize, fontWeight, width }, props.style]} onPress={props.onPress}>{props.text}</Text>
  )
}