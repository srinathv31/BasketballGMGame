import { PlayerAttributes } from "../../../interfaces/Attributes";

const sfWeights: PlayerAttributes = {
    overall: 0,
    physical: {
        speed: 0.5,
        strength: 0.25,
        vertical: 0.25,
        injuryProne: 0,
        categoryWeight: 0.05
    },
    mental: {
        shotIQ: 0.6,
        playmakingIQ: 0.15,
        discipline: 0,
        defensiveIQ: 0.25,
        categoryWeight: 0.1
    },
    offense: {
        close: 0.15,
        midRange: 0.15,
        threePoint: 0.15,
        freeThrow: 0.15,
        layup: 0.135,
        dunk: 0.135,
        drawFoul: 0,
        postFade: 0,
        ballHandle: 0.08,
        passing: 0.05,
        categoryWeight: 0.6
    },
    defense: {
        interiorDefense: 0,
        perimeterDefense: 0.7,
        block: 0.05,
        steal: 0.15,
        offensiveRebound: 0,
        defensiveRebound: 0.1,
        categoryWeight: 0.25
    }
};

export default sfWeights;
