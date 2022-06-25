import { PlayerAttributes } from "../../../interfaces/Attributes";

const pgWeights: PlayerAttributes = {
    overall: 0,
    physical: {
        speed: 0.85,
        strength: 0.05,
        vertical: 0.1,
        injuryProne: 0,
        categoryWeight: 0.05
    },
    mental: {
        shotIQ: 0.15,
        playmakingIQ: 0.65,
        discipline: 0,
        defensiveIQ: 0.2,
        categoryWeight: 0.1
    },
    offense: {
        close: 0.1,
        midRange: 0.08,
        threePoint: 0.15,
        freeThrow: 0.1,
        layup: 0.12,
        dunk: 0,
        drawFoul: 0,
        postFade: 0,
        ballHandle: 0.25,
        passing: 0.2,
        categoryWeight: 0.75
    },
    defense: {
        interiorDefense: 0,
        perimeterDefense: 0.8,
        block: 0,
        steal: 0.15,
        offensiveRebound: 0,
        defensiveRebound: 0.05,
        categoryWeight: 0.1
    }
};

export default pgWeights;
