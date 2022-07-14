// Source Imports
import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function ReferencePoints(): JSX.Element {
    
    function circleEquation(x: number, y: number) {
        console.log(isInside(35, 100, 100, x, y));
        // console.log(fgtype);
    }
    function isInside(circle_x: number, circle_y: number, rad: number, x: number, y: number) {
     
        // Compare radius of circle with
        // distance of its center from
        // given point
     
        if (Math.pow(x - circle_x, 2) + (Math.pow(y - circle_y, 2)*1.23) <= Math.pow(rad, 2)) {
            return true;
        } else {
            return false;
        }
    }

    return(
        <>
            <TouchableOpacity onPress={() => circleEquation(35, 195)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 35, bottom: 30 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 170)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 100, bottom: 45 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 170)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 100, bottom: 195 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(35, 195)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 140, bottom: 120 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 60, bottom: 210 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 35, bottom: 210 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 80, bottom: 145 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 80, bottom: 95 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 20, bottom: 95 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 20, bottom: 145 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 40, bottom: 130 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"lime"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 40, bottom: 110 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"lime"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: 50, bottom: 120 }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"lime"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
        </>
    );
}
