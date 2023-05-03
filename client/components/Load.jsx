import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'






const Load = (props) => {
  const dispatch = useDispatch()

  const Name = props.load.name

  
  


  return (
    <View>
      <Text>{Name}</Text>
    </View>
  )
};

export default Load;

