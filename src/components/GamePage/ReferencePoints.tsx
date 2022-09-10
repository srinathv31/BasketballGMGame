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
            {/* 3 Point Refs */}
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "9%", bottom: "88%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 170)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "26%", bottom: "81%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(35, 195)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "36%", bottom: "50%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 170)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "26%", bottom: "19%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 170)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "9%", bottom: "12%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"blue"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            
            {/* Paint Refs */}
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "21%", bottom: "60%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "21%", bottom: "40%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "5%", bottom: "40%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "5%", bottom: "60%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"yellow"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>

            {/* Rim Refs */}
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "10%", bottom: "53%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"lime"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "10%", bottom: "47%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"lime"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => circleEquation(100, 30)}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: "13%", bottom: "50%" }}>
                <Svg height="100" width="100" style={{ position: "absolute" }}>
                    <Circle cx="50" cy="50" r="5" fill={"lime"} stroke={"black"} strokeWidth={1}  />
                </Svg>
            </TouchableOpacity>
        </>
    );
}
