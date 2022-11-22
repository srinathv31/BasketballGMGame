// Source Imports
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useClientStore } from "../zustand/clientStore";

export default function BottomMenuTab(): JSX.Element {
    const index = useClientStore(state => state.index);
    const updateIndex = useClientStore(state => state.updateIndex);

    const menuButtons = ["book", "person", "play", "stats-chart"];

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 5 }}>
            {menuButtons.map((item, idx) => {
                return(
                    <TouchableOpacity key={idx} onPress={() => updateIndex(idx)}>
                        <Icon
                            name={index === idx ? item : `${item}-outline`}
                            size={25} 
                            color="#900"
                        ></Icon>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
