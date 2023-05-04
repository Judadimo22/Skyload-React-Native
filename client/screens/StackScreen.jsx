const { View, Text, Button } = require("react-native")
import { useNavigation } from "@react-navigation/native";


const StackScreen = () => {

    const navigation = useNavigation()
    return(
        <View>
            <Text>Stack</Text>
            <Button
            title="Prueba"
            onPress={() => navigation.navigate('AvailableScreen')}
            />
        </View>
    )
};

export default StackScreen;