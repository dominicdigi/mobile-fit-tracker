import { View, Text, StyleSheet} from 'react-native'
import { white } from '../../../styles/colors';

export default function DSText(props) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Poppins-Regular',
      display: 'flex',
    }
  });

  const { color = white, 
  fontSize = 16, 
  width = '100%', 
  fontWeight = 'normal' } = props;

  return (
    <Text style={[styles.text, { color, fontSize, width, fontWeight }]}>{props.text}</Text>
  )
}