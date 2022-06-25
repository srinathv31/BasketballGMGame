import React from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/Ionicons";

const App = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <View style={backgroundStyle}>
                <Text>Pog</Text>
                <Icon name="mail" size={30} color="#4F8EF7" />
            </View>
        </SafeAreaView>
    );
};

export default App;
