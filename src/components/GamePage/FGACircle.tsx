// Source Imports
import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { randomNumberGenerator } from "../../utilities/randomNumberGenerator";

export default function FGACircle({ fgm, fgtype, teamColor }: {
    fgm: boolean,
    fgtype: number,
    teamColor: string
}): JSX.Element {
    
    const threePointParameters = { x: randomNumberGenerator(195, 135), y: randomNumberGenerator(195, 5) };
    const twoPointParameters = { x: randomNumberGenerator(65, 20), y: randomNumberGenerator(180, 20) };

    return(
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", right: fgtype === 3 ? threePointParameters.x : twoPointParameters.x, bottom: fgtype === 3 ? threePointParameters.y : twoPointParameters.y }}>
            <Svg height="100" width="100" style={{ position: "absolute" }}>
                <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
            </Svg>
        </View>
    );
}
