import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import Load from './Load';
import { getLoads } from '../redux/actions';
import { View, StyleSheet } from 'react-native';



export const Loads = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Loads = useSelector((state) => state.LoadsCopy)
  console.log(Loads)
  const resultsPerPage = 15
  const numberOfResults = Loads.length
  const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
  const [pageNumber, setPageNumber] = useState(1)
  const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
  const pageSliceEnd = pageNumber * resultsPerPage

  const dispatch = useDispatch()
  useEffect(() => {
    setPageNumber(1)
  }, [numberOfResults])
  useEffect(() => {
    getLoads()
    const getData = async ( ) => {
      return dispatch(getLoads())
    }
    
  
    setProducts(getData());
  }, []);


  return (
          <View style={styles.container}>
          <View style={styles.containerText}>
        {
          Loads.length ?
            Loads.slice(pageSliceStart, pageSliceEnd).map(load => (<Load key={load._id} load={load} />)) : null  
        }
          </View>      
         </View>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    marginTop:'70%',
    display:'flex',
  },

});

