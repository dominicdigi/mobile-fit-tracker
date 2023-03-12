import { View, TextInput, ProgressBarAndroidComponent } from 'react-native'
import {useState} from 'react'
import { StyleSheet } from 'react-native';
import { white, secondary } from '../../../styles/colors';

export default function DTInput(props) {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

    const styles = StyleSheet.create({
        input: {
          display: 'flex',
          height: 40,
          borderWidth: 1,
          padding: 10,
          color: white,
          borderRadius: 10
        },
      });

      const { 
        width = '100%' } = props;

  return (
    <TextInput 
      ref={props.ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={props.onChange}
      style={[styles.input, { borderColor: isFocused ? secondary : white, width }]}
    >
      {props.value}
    </TextInput>
  )
}