// Source Imports
import React from "react";
import { View, Text } from "react-native";
import { Image, SvgUri } from "react-native-svg";

export default function Overview(): JSX.Element {
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* <Image source={require("../assets/characterFeatures/face.svg")} style={{ width: 200, height: 200 }}></Image> */}
            <Image
                // x="5%"
                // y="5%"
                width="50%"
                height="90%"
                preserveAspectRatio="xMidYMid slice"
                opacity="1"
                href={require("../assets/characterFeatures/face.svg")}
                clipPath="url(#clip)"
            />
            <SvgUri
                width="25"
                height="25"
                uri={require("../assets/characterFeatures/face.svg")} />
        </View>
    );
}
