import { PlayerObject } from "../../interfaces/Player";
import { Roster } from "../../interfaces/Team";
import { generateNewPlayer } from "../draft/draftClassGenerator";

export default function playerGenerator2() {
    const playerList: Roster = {
        1: pgGenerator(),
        2: sgGenerator(),
        3: sfGenerator(),
        4: pfGenerator(),
        5: cGenerator(),
        ...generateTestPlayers()
    };
    return playerList;
}

function pgGenerator() {
    const newPlayer: PlayerObject = {
        ...createPlayerBackground(),
        id: 190,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "NYK" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Magic Johnson",
        position: ["PG"],
        height: 75,
        weight: 195,
        age: 23,
        overall: 70,
        physical: {
            speed: 85,
            strength: 65,
            vertical: 75,
            injuryProne: 80,
        },
        mental: {
            shotIQ: 80,
            playmakingIQ: 90,
            discipline: 70,
            defensiveIQ: 70,
        },
        offense: {
            close: 80,
            midRange: 85,
            threePoint: 65,
            freeThrow: 90,
            layup: 85,
            dunk: 70,
            postFade: 65,
            drawFoul: 70,
            ballHandle: 92,
            passing: 95,
        },
        defense: {
            interiorDefense: 50,
            perimeterDefense: 70,
            block: 20,
            steal: 70,
            offensiveRebound: 30,
            defensiveRebound: 65,
        },
        devTrait: "STAR",
        morale: "Ecstatic",
        loyalty: "HIGH",
        demand: "HIGH",
        ambition: "HIGH"
    };
    return newPlayer;
}

function sgGenerator() {
    const newPlayer: PlayerObject = {
        ...createPlayerBackground(),
        id: 191,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Reggie Miller",
        position: ["SG"],
        height: 77,
        weight: 215,
        age: 23,
        overall: 70,
        physical: {
            speed: 85,
            strength: 60,
            vertical: 70,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 93,
            playmakingIQ: 70,
            discipline: 70,
            defensiveIQ: 70,
        },
        offense: {
            close: 75,
            midRange: 90,
            threePoint: 93,
            freeThrow: 91,
            layup: 85,
            dunk: 73,
            postFade: 70,
            drawFoul: 75,
            ballHandle: 80,
            passing: 70,
        },
        defense: {
            interiorDefense: 50,
            perimeterDefense: 70,
            block: 50,
            steal: 70,
            offensiveRebound: 45,
            defensiveRebound: 65,
        },
        devTrait: "STAR",
        morale: "Ecstatic",
        loyalty: "HIGH",
        demand: "HIGH",
        ambition: "HIGH"
    };
    return newPlayer;
}

function sfGenerator() {
    const newPlayer: PlayerObject = {
        ...createPlayerBackground(),
        id: 192,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Larry Bird",
        position: ["SF"],
        height: 78,
        weight: 220,
        age: 23,
        overall: 70,
        physical: {
            speed: 80,
            strength: 70,
            vertical: 75,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 94,
            playmakingIQ: 85,
            discipline: 80,
            defensiveIQ: 80,
        },
        offense: {
            close: 75,
            midRange: 90,
            threePoint: 80,
            freeThrow: 95,
            layup: 90,
            dunk: 85,
            postFade: 83,
            drawFoul: 75,
            ballHandle: 80,
            passing: 72,
        },
        defense: {
            interiorDefense: 70,
            perimeterDefense: 81,
            block: 65,
            steal: 70,
            offensiveRebound: 65,
            defensiveRebound: 75,
        },
        devTrait: "STAR",
        morale: "Ecstatic",
        loyalty: "HIGH",
        demand: "HIGH",
        ambition: "HIGH"
    };
    return newPlayer;
}

function pfGenerator() {
    const newPlayer: PlayerObject = {
        ...createPlayerBackground(),
        id: 193,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Tim Duncan",
        position: ["PF"],
        height: 81,
        weight: 235,
        age: 23,
        overall: 70,
        physical: {
            speed: 70,
            strength: 85,
            vertical: 70,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 95,
            playmakingIQ: 60,
            discipline: 70,
            defensiveIQ: 97,
        },
        offense: {
            close: 93,
            midRange: 77,
            threePoint: 65,
            freeThrow: 77,
            layup: 90,
            dunk: 80,
            postFade: 95,
            drawFoul: 75,
            ballHandle: 65,
            passing: 75,
        },
        defense: {
            interiorDefense: 90,
            perimeterDefense: 65,
            block: 85,
            steal: 65,
            offensiveRebound: 75,
            defensiveRebound: 91,
        },
        devTrait: "STAR",
        morale: "Ecstatic",
        loyalty: "HIGH",
        demand: "HIGH",
        ambition: "HIGH"
    };
    return newPlayer;
}

function cGenerator() {
    const newPlayer: PlayerObject = {
        ...createPlayerBackground(),
        id: 194,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Myles Turner",
        position: ["C"],
        height: 85,
        weight: 270,
        age: 23,
        overall: 70,
        physical: {
            speed: 65,
            strength: 80,
            vertical: 67,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 77,
            playmakingIQ: 55,
            discipline: 70,
            defensiveIQ: 80,
        },
        offense: {
            close: 83,
            midRange: 25,
            threePoint: 75,
            freeThrow: 65,
            layup: 84,
            dunk: 89,
            postFade: 77,
            drawFoul: 75,
            ballHandle: 50,
            passing: 50,
        },
        defense: {
            interiorDefense: 85,
            perimeterDefense: 60,
            block: 85,
            steal: 63,
            offensiveRebound: 70,
            defensiveRebound: 87,
        },
        devTrait: "STAR",
        morale: "Ecstatic",
        loyalty: "HIGH",
        demand: "HIGH",
        ambition: "HIGH"
    };
    return newPlayer;
}

function generateTestPlayers() {
    const playerList: Roster = {};
    for (let i=6;i<13;i++){
        playerList[i] = generateNewPlayer(i);
    }
    return playerList;
}

function createPlayerBackground() {
    const playerBackgroud = {
        draftPos: 0,
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
    };
    return playerBackgroud;
}
