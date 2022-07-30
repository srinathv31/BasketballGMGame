// Source Imports
import React, { SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Popover, { PopoverMode } from "react-native-popover-view";
import Svg, { Circle } from "react-native-svg";
import { ShotAttempt } from "../../interfaces/Game";

export default function FGACircle({ fgm, fgtype, teamColor, home, pointParameters, player, active, shotID, setShotChartCircles }: {
    fgm: boolean,
    fgtype: ShotAttempt,
    teamColor: string,
    home: boolean,
    pointParameters: { x: number, y: number },
    player: string,
    active: boolean,
    shotID: number,
    setShotChartCircles: React.Dispatch<SetStateAction<JSX.Element[]>>
}): JSX.Element {

    function findShotOnCourt() {
        setShotChartCircles(currChart => {
            const shotChartCirclesCopy = [ ...currChart ];

            // Hide all other Popovers
            shotChartCirclesCopy.forEach((shot, idx) => {
                shotChartCirclesCopy[idx] = React.cloneElement(
                    shot,
                    { "active": false }
                );
            });

            // Show selected shot Popover
            shotChartCirclesCopy[shotID] = React.cloneElement(
                currChart[shotID],
                { "active": !currChart[shotID].props["active"] }
            );
            return shotChartCirclesCopy;
        });
    }
    
    function closePopover() {
        setShotChartCircles(currChart => {
            const shotChartCirclesCopy = [ ...currChart ];

            // Hide all other Popovers
            shotChartCirclesCopy.forEach((shot, idx) => {
                shotChartCirclesCopy[idx] = React.cloneElement(
                    shot,
                    { "active": false }
                );
            });
            return shotChartCirclesCopy;
        });
    }

    return(
        <>
            { home ? 
                <Popover 
                    from={() => (
                        <TouchableOpacity onPress={() => findShotOnCourt()}
                            style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: `${pointParameters.x}%`, bottom: `${pointParameters.y}%` }}>
                            <Svg height="100" width="100" style={{ position: "absolute" }}>
                                <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
                            </Svg>
                        </TouchableOpacity>
                    )}
                    isVisible={active} 
                    onRequestClose={() => closePopover()} 
                    mode={PopoverMode.TOOLTIP}
                    popoverStyle={{ padding: 5 }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Text>{`${player} | ${fgm}`}</Text>
                        <Text>{`Shot: ${fgtype}`}</Text>
                    </View>
                </Popover> :
                <Popover 
                    from={() => (
                        <TouchableOpacity onPress={() => findShotOnCourt()} 
                            style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", right: `${pointParameters.x}%`, bottom: `${pointParameters.y}%` }}>
                            <Svg height="100" width="100" style={{ position: "absolute" }}>
                                <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={"black"} strokeWidth={3}  />
                            </Svg>
                        </TouchableOpacity>
                    )}
                    isVisible={active}
                    onRequestClose={() => closePopover()} 
                    mode={PopoverMode.TOOLTIP}
                    popoverStyle={{ padding: 5 }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Text>{`${player} | ${fgm}`}</Text>
                        <Text>{`Shot: ${fgtype}`}</Text>
                    </View>
                </Popover>
            }
        </>
    );
}
