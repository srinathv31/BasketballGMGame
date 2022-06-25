import { DevTrait, LevelsList, Morale, PlayerObject, Postion } from "../../interfaces/Player";
import { randomNumberGenerator, weightedRandomNumberGenerator } from "../randomNumberGenerator";
import firstNameList from "../../assets/firstNameList.json";
import lastNameList from "../../assets/lastNamesList.json";
import collegeNamesList from "../../assets/collegeNamesList.json";
import { generateOverall } from "../player/overallGenerator";
import { generateHeight } from "./playerGenerators/vitals/heightGenerator";
import { generateWeight } from "./playerGenerators/vitals/weightGenerator";
import { generateReboundRating } from "./playerGenerators/ratings/defense/reboundGenerator";
import generateBlockRating from "./playerGenerators/ratings/defense/blockGenerator";
import generateSpeedRating from "./playerGenerators/ratings/physical/speedGenerator";
import generateStrengthRating from "./playerGenerators/ratings/physical/strengthGenerator";
import generateMidRange from "./playerGenerators/ratings/offense/midRangeGenerator";
import generateThreePoint from "./playerGenerators/ratings/offense/threePointGenerator";
import generateFreeThrow from "./playerGenerators/ratings/offense/freeThrowGenerator";
import generateLayup from "./playerGenerators/ratings/offense/layupGenerator";
import generateDunk from "./playerGenerators/ratings/offense/dunkGenerator";
import generatePostFade from "./playerGenerators/ratings/offense/postFadeGenerator";
import generateBallHandle from "./playerGenerators/ratings/offense/ballHandleGenerator";
import generatePassing from "./playerGenerators/ratings/offense/passingGenerator";

export function generateDraftClass() {
    const draftClassList: PlayerObject[] = [];
    const draftClassPopulation = randomNumberGenerator(80, 72);
    while (draftClassList.length < draftClassPopulation) {
        draftClassList.push(generateNewPlayer(draftClassList.length));
    }
    return draftClassList;
}

function generateNewPlayer(listLength: number): PlayerObject {
    const playerPosition: Postion[] = generatePosition();
    const playerHeight = generateHeight(playerPosition[0]);
    const playerWeight = generateWeight(playerHeight);
    const playerRatings = generatePlayerRatings(playerHeight, playerPosition[0]);
    const playerTraits = generatePlayerTraits();
    const newPlayer: PlayerObject = {
        id: (listLength) + 1,
        draftPos: 0,
        status: "Active",
        teamNumber: randomNumberGenerator(99),
        teams: { 2022: "" },
        salary: { 2022: 0 },
        awards: { "ROY": 0, "6MOY": 0, "CBPOY": 0, "MIP": 0, "DPOY": 0, "MVP": 0, "CFMVP": 0, "FMVP": 0 },
        teamSelections: { general: {}, defensive: {} },
        name: generateName(),
        position: playerPosition,
        height: playerHeight,
        weight: playerWeight,
        age: randomNumberGenerator(24, 19),
        college: generateCollege(),
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
        overall: playerRatings.overall,
        physical: playerRatings.physicalRatings,
        mental: playerRatings.mentalRatings,
        offense: playerRatings.offensiveRatings,
        defense: playerRatings.defensiveRatings,
        devTrait: playerTraits.devTrait,
        morale: playerTraits.morale,
        loyalty: playerTraits.loyalty,
        demand: playerTraits.demand,
        ambition: playerTraits.ambition
    };
    return newPlayer;
}

function generateName() {
    const firstName = firstNameList[randomNumberGenerator(firstNameList.length)];
    const lastName = lastNameList[randomNumberGenerator(lastNameList.length)];
    return `${firstName} ${lastName}`;
}

function generatePosition() {
    const positionList: Postion[] = ["PG", "SG", "SF", "PF", "C"];
    const positions: Postion[] = [];
    positions.push(positionList[randomNumberGenerator(positionList.length)]);
    return positions;
}

function generateCollege() {
    return `${collegeNamesList[randomNumberGenerator(collegeNamesList.length)]}`;
}

function generatePlayerRatings(height: number, position: Postion) {
    const physicalRatings = generatePhysicalRatings(position);
    const mentalRatings = generateMentalRatings();
    const offensiveRatings = generateOffensiveRatings(position, height);
    const defensiveRatings = generateDefensiveRatings(position, height);
    const categoryOveralls = { overall: 70, physical: physicalRatings, mental: mentalRatings, offense: offensiveRatings, defense: defensiveRatings };
    const overall = generateOverall(position, categoryOveralls);
    return { overall: overall, physicalRatings: physicalRatings, mentalRatings: mentalRatings, offensiveRatings: offensiveRatings, defensiveRatings: defensiveRatings };
}

function generatePhysicalRatings(position: Postion)  {
    const physicals = { 
        speed: generateSpeedRating(position),
        strength: generateStrengthRating(position),
        vertical: randomNumberGenerator(99, 35),
        injuryProne: weightedRandomNumberGenerator(99, 0, 1.6) };
    return physicals;
}

function generateMentalRatings() {
    const mentals = { 
        shotIQ: weightedRandomNumberGenerator(99, 20, 0.5), 
        playmakingIQ: weightedRandomNumberGenerator(99, 20, 0.5), 
        discipline: weightedRandomNumberGenerator(99, 1, 0.6), 
        defensiveIQ: weightedRandomNumberGenerator(99, 20, 0.5) 
    };
    return mentals;
}

function generateOffensiveRatings(position: Postion, height: number) {
    const offense = { 
        close: weightedRandomNumberGenerator(99, 35, 0.7),
        midRange: generateMidRange(position),
        threePoint: generateThreePoint(position),
        freeThrow: generateFreeThrow(position),
        layup: generateLayup(position),
        dunk: generateDunk(position),
        postFade: generatePostFade(height),
        drawFoul: randomNumberGenerator(99, 20),
        ballHandle: generateBallHandle(position),
        passing: generatePassing(position)
    };
    return offense;
}

function generateDefensiveRatings(position: Postion, height: number) {
    const defense = {
        interiorDefense: height < 77 ? randomNumberGenerator(75, 35) : randomNumberGenerator(99, 50),
        perimeterDefense: height > 81 ? randomNumberGenerator(80, 35) : randomNumberGenerator(99, 50),
        block: generateBlockRating(height),
        steal: position === "SF" ? weightedRandomNumberGenerator(99, 45, 0.8) : randomNumberGenerator(99, 35),
        offensiveRebound: generateReboundRating(height),
        defensiveRebound: generateReboundRating(height)
    };
    return defense;
}

function generatePlayerTraits() {
    const devTraits: DevTrait[] = ["STAR", "FAST", "NORMAL"];
    const moraleList: Morale[] = ["Ecstatic", "Happy", "Content", "Unhappy"];
    const levelsList: LevelsList[] = ["HIGH", "MED", "LOW"];
    return { 
        devTrait: devTraits[weightedRandomNumberGenerator(devTraits.length-1, 0, 0.4)],
        morale: moraleList[randomNumberGenerator(moraleList.length)],
        loyalty: levelsList[randomNumberGenerator(levelsList.length)],
        demand: levelsList[randomNumberGenerator(levelsList.length)],
        ambition: levelsList[randomNumberGenerator(levelsList.length)] 
    };
}
