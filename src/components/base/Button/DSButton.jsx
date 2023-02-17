import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white } from '../../../styles/colors';

export default function DSButton(props) {
    const styles = StyleSheet.create({
        text: {
          fontFamily: 'Poppins-Regular',
          width: '100%',
          display: 'flex',
          //paddingVertical: 6,
          //paddingHorizontal: 6
        }
      });
    
    const { color = white, fontSize = 12 } = props;
      
  return (
    <View>
      <TouchableOpacity>
        <Text style={[styles.text, { color, fontSize }]}>
            {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}