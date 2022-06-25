import { PlayerAttributes } from "../../../interfaces/Attributes";

const cWeights: PlayerAttributes = {
    overall: 0,
    physical: {
        speed: 0,
        strength: 0.85,
        vertical: 0.15,
        injuryProne: 0,
        categoryWeight: 0.05
    },
    mental: {
        shotIQ: 0.45,
        playmakingIQ: 0.05,
        discipline: 0,
        defensiveIQ: 0.5,
        categoryWeight: 0.1
    },
    offense: {
        close: 0.25,
        midRange: 0.1,
        threePoint: 0.05,
        freeThrow: 0.1,
        layup: 0.15,
        dunk: 0.15,
        postFade: 0.2,
        drawFoul: 0,
        ballHandle: 0,
        passing: 0,
        categoryWeight: 0.6
    },
    defense: {
        interiorDefense: 0.55,
        perimeterDefense: 0,
        block: 0.1,
        steal: 0,
        offensiveRebound: 0.05,
        defensiveRebound: 0.3,
        categoryWeight: 0.25
    }
};

export default cWeights;
