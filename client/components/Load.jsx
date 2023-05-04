import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'






const Load = (props) => {
  const dispatch = useDispatch()

  const Name = props.load.name
  const Status = props.load.status
  const Id = props.load._id
  const Description = props.load.description

  return (
    <View style={styles.container}>
      <Text style={styles.text} >{Name}</Text>
      <Text>{Id}</Text>
    </View>
  )

}








  const styles = StyleSheet.create({
    text: {
      marginVertical:10,
      textAlign: 'center'
    },
    container:{
      display:'flex',
    }
  
  });
  

export default Load;

