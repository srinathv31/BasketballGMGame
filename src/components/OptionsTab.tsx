// Source Imports
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MenuOption from "../interfaces/Menu";

export default function OptionTabs({ menuOptionsInitial }: {
    menuOptionsInitial: MenuOption[]
}): JSX.Element {
    const [menuOptions, setMenuOptions] = useState<MenuOption[]>(menuOptionsInitial);

    function handleMenuOption(index: number) {
        const menuOptionsCopy = [ ...menuOptions ];

        menuOptionsCopy.forEach(option => {
            option.selected = false;
        });
        menuOptionsCopy[index].selected = true;
        setMenuOptions(menuOptionsCopy);
    }

    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5, padding: 5 }}>
            {menuOptions.map((item, index) => {
                return(
                    <TouchableOpacity onPress={() => handleMenuOption(index)} key={index} style={{ borderBottomWidth: 1, borderColor: "black", padding: 10, backgroundColor: item.selected ? "#fbded9" : "transparent" }}>
                        <Text style={{ fontSize: 12 }}>{item.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

