import React, { useState } from "react";
import { LogBox, SafeAreaView, StatusBar, useColorScheme, useWindowDimensions, View, } from "react-native";
import { Route, TabView } from "react-native-tab-view";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BottomMenuTab from "./components/BottomMenuTab";
import Header from "./components/Header";
import NextGamePage from "./screens/NextGamePage";
import LeaguePage from "./screens/LeaguePage";
import Overview from "./screens/Overview";
import RosterPage from "./screens/RosterPage";
import { PageView } from "./interfaces/Page";
import { globalPropsContext } from "./hooks/context/GlobalPropContext";
import PlayGamePage from "./screens/PlayGamePage";
import { useClientStore } from "./zustand/clientStore";

LogBox.ignoreLogs(["Sending"]);

const App = () => {
    const layout = useWindowDimensions();
    
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const index = useClientStore(state => state.index);
    const updateIndex = useClientStore(state => state.updateIndex);

    const [pageView, setPageView] = useState<PageView>("home");

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
                return <NextGamePage />;
            case "work":
                return <LeaguePage />;
            default:
                return null;
        }
    };

    const GlobalProps = { setPageView, pageView };

    return (
        <globalPropsContext.Provider value={GlobalProps}>
            <View style={{ backgroundColor: "crimson", flex: 0.1 }}>
                <Header/>
            </View>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={"light-content"} />
                { pageView === "home" 
                    ? <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={(index) => updateIndex(index)}
                        initialLayout={{ width: layout.width }}
                        tabBarPosition="bottom"
                        renderTabBar={() => <BottomMenuTab />}
                    />
                    : <PlayGamePage />
                }
            </SafeAreaView>
        </globalPropsContext.Provider>
    );
};

export default App;
