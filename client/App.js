import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import {Loads} from './components/Loads';
import  Load  from './components/Load';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Loads/>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor:'black',
    color: 'white',
    width: 100
  }
});
