import { PlayerAttributes } from "../../../interfaces/Attributes";

const sgWeights: PlayerAttributes = {
    overall: 0,
    physical: {
        speed: 0.65,
        strength: 0.15,
        vertical: 0.2,
        injuryProne: 0,
        categoryWeight: 0.05
    },
    mental: {
        shotIQ: 0.65,
        playmakingIQ: 0.15,
        discipline: 0,
        defensiveIQ: 0.2,
        categoryWeight: 0.1
    },
    offense: {
        close: 0.15,
        midRange: 0.15,
        threePoint: 0.15,
        freeThrow: 0.15,
        layup: 0.125,
        dunk: 0.125,
        drawFoul: 0,
        postFade: 0,
        ballHandle: 0.1,
        passing: 0.05,
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

export default sgWeights;
