// Source Imports
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BottomMenuTab({ setIndex, index }: {
    setIndex: (i: number) => void, index: number
}): JSX.Element {
    
    const menuButtons = ["book", "person", "play", "stats-chart"];

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {menuButtons.map((item, idx) => {
                return(
                    <Icon
                        key={idx}
                        onPress={() => setIndex(idx)}
                        name={index === idx ? item : `${item}-outline`}
                        size={25} 
                        color="#900"
                    ></Icon>
                );
            })}
        </View>
    );
}
