// Source Imports
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { ShotAttempt } from "../../interfaces/Game";
import { randomNumberGenerator } from "../../utilities/randomNumberGenerator";

export default function FGACircle({ fgm, fgtype, teamColor, home }: {
    fgm: boolean,
    fgtype: ShotAttempt,
    teamColor: string,
    home: boolean,
}): JSX.Element {

    const [pointParameters, setPointParameters] = useState<{x: number, y: number}>({
        x: 195, y: 195
    });

    function createPointParameters(): void {
        const xParameter = randomNumberGenerator(165, 20);
        const yParameter = randomNumberGenerator(195, 5);
        if (fgtype === "threePoint" && isInside(35, 100, 100, xParameter, yParameter) === true) {
            return createPointParameters();
        }
        if (fgtype !== "threePoint" && isInside(35, 107, 100, xParameter, yParameter) === false) {
            return createPointParameters();
        }
        if (fgtype === "midRange" && checkMidRange(xParameter, yParameter) === false) {
            return createPointParameters();
        }
        if ((fgtype === "close" || fgtype === "layup") && checkMidRange(xParameter, yParameter) !== false) {
            return createPointParameters();
        }
        if (fgtype === "dunk") {
            const pointParametersCopy = { x: randomNumberGenerator(50, 40), y: randomNumberGenerator(115, 100) };
            setPointParameters(pointParametersCopy);
            return;
        }
        const pointParametersCopy = { x: xParameter, y: yParameter };
        setPointParameters(pointParametersCopy);
    }

    function circleEquation(x: number, y: number) {
        console.log(isInside(35, 100, 100, x, y));
        console.log(fgtype);
    }

    function isInside(circle_x: number, circle_y: number, rad: number, x: number, y: number) {
     
        // Compare radius of circle with
        // distance of its center from
        // given point
     
        if (Math.pow(x - circle_x, 2) + (Math.pow(y - circle_y, 2)*1.3) <= Math.pow(rad, 2)) {
            return true;
        } else {
            return false;
        }
    }

    function checkMidRange(x: number, y: number) {
        if (y > 80 && y < 135) {
            if (x > 70) {
                return true;
            }
            return false;
        }
        return true;
    }

    useEffect(() => {
        createPointParameters();
    }, []);
 

    return(
        <>
            { home ? 
                <TouchableOpacity onPress={() => circleEquation(pointParameters.x, pointParameters.y)}
                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: pointParameters.x, bottom: pointParameters.y }}>
                    <Svg height="100" width="100" style={{ position: "absolute" }}>
                        <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
                    </Svg>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => circleEquation(pointParameters.x, pointParameters.y)} 
                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", right: pointParameters.x, bottom: pointParameters.y }}>
                    <Svg height="100" width="100" style={{ position: "absolute" }}>
                        <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
                    </Svg>
                </TouchableOpacity>
            }
        </>
    );
}
