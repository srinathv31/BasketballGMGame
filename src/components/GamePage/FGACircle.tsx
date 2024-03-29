// Source Imports
import React, { SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Popover, { PopoverMode } from "react-native-popover-view";
import Svg, { Circle } from "react-native-svg";
import { GameStatus, ShotAttempt } from "../../interfaces/Game";

export default function FGACircle({ fgm, fgtype, teamColor, home, pointParameters, player, active, shotID, setShotChartCircles, gameRunning }: {
    fgm: boolean,
    fgtype: ShotAttempt,
    teamColor: string,
    home: boolean,
    pointParameters: { x: number, y: number },
    player: string,
    active: boolean,
    shotID: number,
    setShotChartCircles: React.Dispatch<SetStateAction<GameStatus>>,
    gameRunning: boolean
}): JSX.Element {

    function findShotOnCourt() {
        setShotChartCircles(currGameStatus => {
            const currGameStatusCopy = { ...currGameStatus };
            const shotChartCirclesCopy = [ ...currGameStatus.shotChartCircles ];
            const lastElement = shotChartCirclesCopy[shotChartCirclesCopy.length-1];

            if (lastElement.props["active"] === true && lastElement.props["shotID"] === shotID) {
                shotChartCirclesCopy.pop();
                currGameStatusCopy.shotChartCircles = shotChartCirclesCopy;
                return currGameStatusCopy;
            }

            // Remove any duplicates
            const filteredList = shotChartCirclesCopy.filter(shot => shot.props["active"] === false);

            // Duplicate selected shot to layer on top of everything else
            filteredList.push(React.cloneElement(
                currGameStatus.shotChartCircles[shotID],
                { "active": true }
            ));

            currGameStatusCopy.shotChartCircles = filteredList;
            return currGameStatusCopy;
        });
    }
    
    function closePopover() {
        setShotChartCircles(currGameStatus => {
            const currGameStatusCopy = { ...currGameStatus };
            const shotChartCirclesCopy = [ ...currGameStatus.shotChartCircles ];

            // Hide all other Popovers
            shotChartCirclesCopy.forEach((shot, idx) => {
                shotChartCirclesCopy[idx] = React.cloneElement(
                    shot,
                    { "active": false }
                );
            });
            
            currGameStatusCopy.shotChartCircles = shotChartCirclesCopy;
            return currGameStatusCopy;
        });
    }

    return(
        <>
            { home ? 
                <Popover 
                    from={() => (
                        <TouchableOpacity onPress={() => findShotOnCourt()} disabled={gameRunning}
                            style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", left: `${pointParameters.x}%`, bottom: `${pointParameters.y}%` }}>
                            <Svg height="100" width="100" style={{ position: "absolute" }}>
                                <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={active ? "lime" : "black"} strokeWidth={3}  />
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
                        <TouchableOpacity onPress={() => findShotOnCourt()} disabled={gameRunning}
                            style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", right: `${pointParameters.x}%`, bottom: `${pointParameters.y}%` }}>
                            <Svg height="100" width="100" style={{ position: "absolute" }}>
                                <Circle cx="50" cy="50" r="5" fill={fgm ? teamColor : "transparent"} stroke={active ? "lime" : "black"} strokeWidth={3}  />
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
