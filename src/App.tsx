import React, { useState } from "react";
import { LogBox, SafeAreaView, StatusBar, useColorScheme, useWindowDimensions, View, } from "react-native";
import { Route, TabView } from "react-native-tab-view";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BottomMenuTab from "./components/BottomMenuTab";
import Header from "./components/Header";
import GamePage from "./screens/GamePage";
import LeaguePage from "./screens/LeaguePage";
import Overview from "./screens/Overview";
import RosterPage from "./screens/RosterPage";
LogBox.ignoreLogs(["Sending"]);

const App = () => {
    const layout = useWindowDimensions();
    
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [index, setIndex] = useState<number>(1);

    const [routes] = useState([
        { key: "cal", title: "Overview" },
        { key: "home", title: "Team" },
        { key: "supp", title: "Game" },
        { key: "work", title: "League" },
    ]);

    const renderScene = ({ route }: {
        route: Route
    }) => {
        switch (route.key) {
            case "home":
                return <RosterPage />;
            case "cal":
                return <Overview />;
            case "supp":
                return <GamePage />;
            case "work":
                return <LeaguePage />;
            default:
                return null;
        }
    };

    return (
        <>
            <View style={{ backgroundColor: "crimson", flex: 0.1 }}>
                <Header/>
            </View>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={"light-content"} />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    tabBarPosition="bottom"
                    renderTabBar={() => <BottomMenuTab setIndex={setIndex} index={index} />}
                />
            </SafeAreaView>
        </>
    );
};

export default App;
