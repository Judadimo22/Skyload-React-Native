import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AvailableLoad from './AvailableLoad';
import { getLoads } from '../redux/actions';
import { View } from 'react-native';


export const AvailableLoads = () => {

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
    <View>
          <View>
        {
          Loads.length ?
            Loads.slice(pageSliceStart, pageSliceEnd).map(load => (<Load key={load._id} load={load} />)) : null  
        }
          </View>      
    </View>
  )
}
