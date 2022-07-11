import { PlayerObject } from "../../interfaces/Player";

export default function playerGenerator() {
    const newPlayer: PlayerObject = {
        id: 0,
        draftPos: 0,
        status: "Active",
        teamNumber: 0,
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Jon Hamm",
        position: ["PG"],
        height: 75,
        weight: 225,
        age: 23,
        college: "UNC",
        FP: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        GP: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        MIN: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        PTS: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "FG%": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "3P%": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "FT%": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        REB: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        AST: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        BLK: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        STL: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "3PM": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        PF: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        TO: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        overall: 70,
        physical: {
            speed: 70,
            strength: 50,
            vertical: 75,
            injuryProne: 80,
        },
        mental: {
            shotIQ: 70,
            playmakingIQ: 70,
            discipline: 70,
            defensiveIQ: 70,
        },
        offense: {
            close: 75,
            midRange: 77,
            threePoint: 70,
            freeThrow: 70,
            layup: 85,
            dunk: 70,
            postFade: 70,
            drawFoul: 70,
            ballHandle: 70,
            passing: 70,
        },
        defense: {
            interiorDefense: 70,
            perimeterDefense: 70,
            block: 70,
            steal: 70,
            offensiveRebound: 70,
            defensiveRebound: 70,
        },
        devTrait: "STAR",
        morale: "Ecstatic",
        loyalty: "HIGH",
        demand: "HIGH",
        ambition: "HIGH"
    };
    return newPlayer;
}
