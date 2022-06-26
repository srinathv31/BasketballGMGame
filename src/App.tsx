import React from "react";
import { SafeAreaView, StatusBar, useColorScheme, View, } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from "./components/Header";
import RosterPage from "./screens/RosterPage";

const App = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <>
            <View style={{ backgroundColor: "crimson", flex: 0.1 }}>
                <Header/>
            </View>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={"light-content"} />
                <RosterPage />
            </SafeAreaView>
        </>
    );
};

export default App;
