// Source Imports
import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { globalPropsContext } from "../../hooks/context/GlobalPropContext";
import { GameData } from "../../interfaces/Game";

export default function PlayButton({ gameFinished, gameRunning, setGameRunning, setGameSpeed, scoreBoard }: {
    gameFinished: boolean,
    gameRunning: boolean, setGameRunning: (g: boolean) => void,
    setGameSpeed: (s: number) => void,
    scoreBoard: GameData
}): JSX.Element {
    const { setPageView } = useContext(globalPropsContext);
    
    interface SpeedButton {
        val: number,
        label: string,
        selected: boolean
    }

    const speedButtonListInit = [
        { val: 1000, label: "1x", selected: true },
        { val: 500, label: "2x", selected: false },
        { val: 200, label: "4x", selected: false },
    ];

    const [speedButtonList, setSpeedButtonList] = useState<SpeedButton[]>(speedButtonListInit);

    function handleSpeedButton(idx: number) {
        const speedButtonListCopy = [ ...speedButtonList ];
        speedButtonListCopy.forEach(item => {
            item.selected = false;
        });
        speedButtonListCopy[idx].selected = true;

        setSpeedButtonList(speedButtonListCopy);
        setGameSpeed(speedButtonList[idx].val);
    }

    return(
        <>
            { !gameFinished ? 
                <View style={{ padding: 10 }}>
                    { !gameRunning ? 
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <View style={{ flexDirection: "row", position: "absolute", left: 0 }}>
                                {speedButtonList.map((item, idx) => {
                                    return(
                                        <TouchableOpacity key={idx} onPress={() => handleSpeedButton(idx)}>
                                            <Text style={[styles.speedButton, { backgroundColor: item.selected ? "crimson" : "transparent" }]}>{item.label}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <TouchableOpacity onPress={() => setGameRunning(true)}>
                                <Icon
                                    name="play"
                                    size={25} 
                                    color="green"
                                ></Icon>
                            </TouchableOpacity>
                        </View> :
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <View style={{ flexDirection: "row", position: "absolute", left: 0 }}>
                                {speedButtonList.map((item, idx) => {
                                    return(
                                        <TouchableOpacity key={idx} disabled>
                                            <Text style={[styles.speedButton, { backgroundColor: item.selected ? "crimson" : "transparent", color: "grey" }]}>{item.label}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <TouchableOpacity onPress={() => setGameRunning(false)}>
                                <Icon
                                    name="pause"
                                    size={25} 
                                    color="#900"
                                ></Icon>
                            </TouchableOpacity>
                        </View>
                    }
                </View> :
                <TouchableOpacity onPress={() => console.log(JSON.stringify(scoreBoard))} style={{ backgroundColor: "silver", padding: 15 }}>
                    <Text style={{ alignSelf: "center", fontWeight: "700" }}>NEXT</Text>
                </TouchableOpacity>
            }
        </>
    );
}

const styles = StyleSheet.create({
    speedButton: {
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: "center"
    }
});
