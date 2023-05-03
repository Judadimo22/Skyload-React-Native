import { useState } from "react";
import { setSearch } from "../redux/actions";
import { useDispatch } from "react-redux";
import { View, TextInput, TouchableHighlight } from "react-native";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleCLick = (e) => {
    e.preventDefault();
    dispatch(setSearch(name));;

    setName("");
  };

    return(
        <View>
        <TextInput type="text" id="" value={name} placeholder="Search ..." onChange={(e) => handleInputChange(e)} onSubmitEditing={(e) => handleCLick(e)} />
        </View>
    )
}
