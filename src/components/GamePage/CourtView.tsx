// Source Imports
import React from "react";
import { ImageBackground, View } from "react-native";
import ReferencePoints from "./ReferencePoints";

export default function CourtView({ shotChartCircles }: {
    shotChartCircles: JSX.Element[]
}): JSX.Element {
    return(
        <ImageBackground source={require("../../assets/gameScreen/basketballCourt.jpg")} style={{ flex: 1 }} >
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                {/* <TeamLogo team="PHI" logoSize={40} />
                <TeamLogo team="NYK" logoSize={40}/> */}
                {shotChartCircles.map((item) => {
                    return(
                        <React.Fragment key={item.key}>
                            { item }
                        </React.Fragment>
                    );
                })}
                    
                <ReferencePoints />
            </View>
        </ImageBackground>
    );
}
