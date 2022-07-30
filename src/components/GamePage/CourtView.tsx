// Source Imports
import React from "react";
import { ImageBackground, View } from "react-native";
import { ShotChartFilter } from "../../interfaces/Game";
// import ReferencePoints from "./ReferencePoints";

export default function CourtView({ shotChartCircles, filter }: {
    shotChartCircles: JSX.Element[],
    filter: ShotChartFilter
}): JSX.Element {
    return(
        <ImageBackground source={require("../../assets/gameScreen/basketballCourt.jpg")} style={{ flex: 1 }} >
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                {/* <TeamLogo team="PHI" logoSize={40} />
                <TeamLogo team="NYK" logoSize={40}/> */}
                {shotChartCircles.filter(item => {
                    if (filter.filterType === "none") {
                        return item;
                    }
                    if (filter.filterType === "player") {
                        return item.props["player"] === filter.playerName;
                    }
                    return item.props["fgtype"] === filter.filterType;
                }).map((item) => {
                    return(
                        <React.Fragment key={item.key}>
                            { item }
                        </React.Fragment>
                    );
                })}
                    
                {/* <ReferencePoints /> */}
            </View>
        </ImageBackground>
    );
}
