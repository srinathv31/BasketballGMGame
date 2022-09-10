import { PlayerObject } from "../../interfaces/Player";
import { Roster } from "../../interfaces/Team";
import { generateNewPlayer } from "../draft/draftClassGenerator";

export default function playerGenerator() {
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
        id: 0,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "PHI" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Jon Hamm",
        position: ["PG"],
        height: 75,
        weight: 195,
        age: 23,
        overall: 70,
        physical: {
            speed: 90,
            strength: 50,
            vertical: 75,
            injuryProne: 80,
        },
        mental: {
            shotIQ: 80,
            playmakingIQ: 85,
            discipline: 70,
            defensiveIQ: 70,
        },
        offense: {
            close: 75,
            midRange: 80,
            threePoint: 85,
            freeThrow: 90,
            layup: 85,
            dunk: 50,
            postFade: 25,
            drawFoul: 70,
            ballHandle: 92,
            passing: 90,
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
        id: 1,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Paolo Banchero",
        position: ["SG"],
        height: 77,
        weight: 215,
        age: 23,
        overall: 70,
        physical: {
            speed: 83,
            strength: 60,
            vertical: 85,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 90,
            playmakingIQ: 70,
            discipline: 70,
            defensiveIQ: 70,
        },
        offense: {
            close: 75,
            midRange: 90,
            threePoint: 90,
            freeThrow: 91,
            layup: 85,
            dunk: 95,
            postFade: 70,
            drawFoul: 75,
            ballHandle: 80,
            passing: 70,
        },
        defense: {
            interiorDefense: 50,
            perimeterDefense: 75,
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
        id: 2,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Kawhi Leonard",
        position: ["SF"],
        height: 78,
        weight: 220,
        age: 23,
        overall: 70,
        physical: {
            speed: 81,
            strength: 70,
            vertical: 75,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 80,
            playmakingIQ: 70,
            discipline: 70,
            defensiveIQ: 80,
        },
        offense: {
            close: 75,
            midRange: 80,
            threePoint: 83,
            freeThrow: 85,
            layup: 83,
            dunk: 90,
            postFade: 73,
            drawFoul: 75,
            ballHandle: 77,
            passing: 72,
        },
        defense: {
            interiorDefense: 70,
            perimeterDefense: 90,
            block: 65,
            steal: 80,
            offensiveRebound: 65,
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

function pfGenerator() {
    const newPlayer: PlayerObject = {
        ...createPlayerBackground(),
        id: 3,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Dirk Nowitzki",
        position: ["PF"],
        height: 81,
        weight: 235,
        age: 23,
        overall: 70,
        physical: {
            speed: 74,
            strength: 80,
            vertical: 70,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 75,
            playmakingIQ: 60,
            discipline: 70,
            defensiveIQ: 85,
        },
        offense: {
            close: 80,
            midRange: 73,
            threePoint: 80,
            freeThrow: 77,
            layup: 83,
            dunk: 80,
            postFade: 89,
            drawFoul: 75,
            ballHandle: 70,
            passing: 70,
        },
        defense: {
            interiorDefense: 85,
            perimeterDefense: 70,
            block: 80,
            steal: 65,
            offensiveRebound: 75,
            defensiveRebound: 85,
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
        id: 4,
        teamNumber: 0,
        status: "Active",
        teams: { 2022: "ATL" },
        salary: { 2022: 1000000 },
        awards: { 2022: [] },
        teamSelections: { defensive: {}, general: {} },
        name: "Chet Goat",
        position: ["C"],
        height: 85,
        weight: 270,
        age: 23,
        overall: 70,
        physical: {
            speed: 65,
            strength: 90,
            vertical: 65,
            injuryProne: 30,
        },
        mental: {
            shotIQ: 75,
            playmakingIQ: 55,
            discipline: 70,
            defensiveIQ: 90,
        },
        offense: {
            close: 85,
            midRange: 25,
            threePoint: 60,
            freeThrow: 65,
            layup: 90,
            dunk: 93,
            postFade: 85,
            drawFoul: 75,
            ballHandle: 50,
            passing: 50,
        },
        defense: {
            interiorDefense: 95,
            perimeterDefense: 60,
            block: 95,
            steal: 55,
            offensiveRebound: 85,
            defensiveRebound: 97,
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
