import React from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from "react-native";

import {
    Colors,
} from "react-native/Libraries/NewAppScreen";

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
            </View>
        </SafeAreaView>
    );
};

export default App;
