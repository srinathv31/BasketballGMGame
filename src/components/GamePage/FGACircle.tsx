// Source Imports
import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { ShotAttempt } from "../../interfaces/Game";
import { circleEquation } from "../../utilities/game/shotChartGenerator";

export default function FGACircle({ fgm, fgtype, teamColor, home, pointParameters }: {
    fgm: boolean,
    fgtype: ShotAttempt,
    teamColor: string,
    home: boolean,
    pointParameters: { x: number, y: number }
}): JSX.Element {
    return(
        <>
            { home ? 
                <TouchableOpacity onPress={() => circleEquation(pointParameters.x, pointParameters.y, fgtype)}
                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: pointParameters.x, bottom: pointParameters.y }}>
                    <Svg height="100" width="100" style={{ position: "absolute" }}>
                        <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
                    </Svg>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => circleEquation(pointParameters.x, pointParameters.y, fgtype)} 
                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", right: pointParameters.x, bottom: pointParameters.y }}>
                    <Svg height="100" width="100" style={{ position: "absolute" }}>
                        <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
                    </Svg>
                </TouchableOpacity>
            }
        </>
    );
}
