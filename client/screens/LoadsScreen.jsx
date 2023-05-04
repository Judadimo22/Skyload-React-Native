import { Loads } from "../components/Loads";
import { Provider } from "react-redux";
import store from '../redux/store/index'
import { View, Text } from "react-native";

const LoadsScreen = () => {
    return(
        <Provider store={store}>
            <View>
                <Loads/>
            </View>
        </Provider>
    )
};

export default LoadsScreen