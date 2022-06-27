// Source Imports
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setByValue } from "../redux/indexSlice";

export default function BottomMenuTab(): JSX.Element {
    const index = useAppSelector(state => state.indexTracker.value);
    const dispatch = useAppDispatch();

    const menuButtons = ["book", "person", "play", "stats-chart"];

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {menuButtons.map((item, idx) => {
                return(
                    <TouchableOpacity key={idx} onPress={() => dispatch(setByValue(idx))}>
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
