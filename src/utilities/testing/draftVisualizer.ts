import { PlayerObject, Postion } from "../../interfaces/Player";

export function draftVisualizer(draftClass: PlayerObject[]) {
    const distributionCurve: Record<number, number> = {
        0: 0,
        10: 0,
        20: 0,
        30: 0,
        40: 0,
        50: 0,
        60: 0,
        70: 0,
        80: 0,
        90: 0,
        100: 0
    };

    draftClass.forEach(player => {
        const overallBracket = Math.floor(player.overall/10)*10;
        distributionCurve[overallBracket]++;
    });

    let distributionString = "";
    Object.keys(distributionCurve).forEach(bracket => {
        distributionString += `${bracket}: ${distributionCurve[+bracket]}\n`;
    });
    console.log(distributionString);
}

export function draftPostionVisualizer(draftClass: PlayerObject[]) {
    const distributionCurve: Record<Postion, number> = {
        "PG": 0,
        "SG": 0,
        "SF": 0,
        "PF": 0,
        "C": 0 
    };

    draftClass.forEach(player => {
        distributionCurve[player.position[0]]++;
    });

    let distributionString = "";
    Object.keys(distributionCurve).forEach(bracket => {
        distributionString += `${bracket}: ${distributionCurve[bracket as Postion]}\n`;
    });
    console.log(distributionString);
}
