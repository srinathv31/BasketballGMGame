// Source Imports
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function MenuIndicator({ index, setIndex }: {
    index: number, setIndex: (i: number) => void
}): JSX.Element {

    const buttonList = [0, 1, 2];

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 5 }}>
            {buttonList.map((item, idx) => {
                return (
                    <TouchableOpacity key={idx} onPress={() => setIndex(item)}>
                        <Icon name={index === item ? "radio-button-on-outline" : "radio-button-off-outline"} size={12} color={"crimson"} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
