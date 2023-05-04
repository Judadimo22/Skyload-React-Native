import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'






const AvailableLoad = (props) => {
  const dispatch = useDispatch()

  const Name = props.load.name
  const Status = props.load.status
  const Id = props.load._id

  if(Status === 'active'){
    return (
      <View>
        <Text>{Name}</Text>
      </View>
    )
  }

  if(Status === 'false'){
    return (
      <View>
        <Text>{Name}</Text>
      </View>
    )
  }


  
  



};

export default AvailableLoad;
