import { View, Text } from 'react-native'
import {useRef} from 'react'
import DTInput from '../Base/Input/DTInput'
import { StyleSheet } from 'react-native'

export default function SetDetail(props) {
  const setInput = useRef(null);
  const weightInput = useRef(null);
  const repsInput = useRef(null);
  const rpeInput = useRef(null);

  const styles = StyleSheet.create({
    setWrapper: {
      display: 'flex',
      flexDirection: 'row'
    },
  });

  function setChange(e){
    props.updateSet(props.exerciseId, parseInt(setInput.current.value), weightInput.current.value, repsInput.current.value, rpeInput.current.value);
  }

  function rpeChange(e){
      var rpe = e.target.value;

      if (rpe && !rpe.match(/^\d{1,5}(\.\d{0,1})?$/)) {
          rpe = props.rpe;
      }
      props.updateSet(props.exerciseId, parseInt(setInput.current.value), weightInput.current.value, repsInput.current.value, rpe);
  }

  function weightChange(e){
      var weight = e.target.value;

      if (weight && !weight.match(/^\d{1,5}(\.\d{0,2})?$/)) {
          weight = props.weight;
      }
      props.updateSet(props.exerciseId, parseInt(setInput.current.value), weight, repsInput.current.value, rpeInput.current.value);
  }

  return (
    <View style={styles.setWrapper}>
      <DTInput ref={setInput} onChange={(e) => setChange(e)} value={parseFloat(props.set) ? parseFloat(parseFloat(props.set).toFixed(2)) : ''} width={'25%'}></DTInput>
      <DTInput ref={weightInput} onChange={(e) => weightChange(e)} value={props.weight} width={'25%'}></DTInput>
      <DTInput ref={repsInput} onChange={(e) => setChange(e)} value={parseFloat(props.reps) ? parseFloat(parseFloat(props.reps).toFixed(2)) : ''} width={'25%'}></DTInput>
      <DTInput ref={rpeInput} onChange={(e) => rpeChange(e)} value={props.rpe} width={'25%'}></DTInput>
    </View>
  )
}