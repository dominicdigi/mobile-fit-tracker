import { View, FlatList } from 'react-native'
import React from 'react'
import DTText from '../Base/Text/DTText'
import SetDetail from './SetDetail'
import DTButton from '../Base/Button/DTButton'
import { Add, Menu } from '../../assets/icons/svgs'
import { white } from '../../styles/colors'
import styles from './ExerciseDetailStyles'

export default function ExerciseDetail(props) {
  const renderSetDetail = ({item}) => {
    return <SetDetail exerciseId={item.exercise_id} set={item.set_id} weight={item.weight} reps={item.reps} rpe={item.rpe} updateSet={props.updateSet} deleteSet={props.deleteSet} editSet={props.editSet}></SetDetail>;
  }; 
  
  return (
    <View style={styles.exerciseWrapper}>
      <View style={styles.headerWrapper}>
        <DTText text={props.exercise && props.exercise.name ? props.exercise.name : ''}></DTText>
        <Menu style={styles.menuIcon} height={25} width={25} stroke={white}></Menu>
      </View>
      <View style={styles.gridHeaderWrapper}>
        <DTText text={'Set'} width={'25%'}></DTText>
        <DTText text={'Weight'} width={'25%'}></DTText>
        <DTText text={'Reps'} width={'25%'}></DTText>
        <DTText text={'RPE'} width={'25%'}></DTText>
      </View>
      <FlatList
        data={props.exercise.sets}
        renderItem={renderSetDetail}
        keyExtractor={(item) => item.set_id}
      />
      <View style={styles.bottomContainer}>
        <DTButton icon={Add} text={'Add Set'} onClick={props.addSet}></DTButton>
      </View>
    </View>
  )
}