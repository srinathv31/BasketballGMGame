import { ReboundData } from "../../interfaces/Game";
import { PlayerObject } from "../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../randomNumberGenerator";

export default function reboundDeterminator(roster: PlayerObject[]): ReboundData {
    const playerReboundPercentages: number[] = [];

    roster.forEach(player => {
        const rebAttribute = player.defense.defensiveRebound;
        if (rebAttribute < 50) {
            playerReboundPercentages.push(weightedRandomNumberGenerator(100, 0, 1.7));
        }
        else if (rebAttribute < 70) {
            playerReboundPercentages.push(weightedRandomNumberGenerator(100, 0, 1.5));
        }
        else if (rebAttribute < 80) {
            playerReboundPercentages.push(weightedRandomNumberGenerator(100, 0, 1));
        }
        else if (rebAttribute < 95) {
            playerReboundPercentages.push(weightedRandomNumberGenerator(100, 0, 0.7));
        }
        else {
            playerReboundPercentages.push(weightedRandomNumberGenerator(100, 0, 0.5));
        }
    });

    const playerToGetRebound = playerReboundPercentages.indexOf(Math.max(...playerReboundPercentages));

    return { player: { name: roster[playerToGetRebound].name, id: roster[playerToGetRebound].id } };
}

