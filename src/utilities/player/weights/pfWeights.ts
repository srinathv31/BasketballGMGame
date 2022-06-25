import { PlayerAttributes } from "../../../interfaces/Attributes";

const pfWeights: PlayerAttributes = {
    overall: 0,
    physical: {
        speed: 0.2,
        strength: 0.4,
        vertical: 0.4,
        injuryProne: 0,
        categoryWeight: 0.05
    },
    mental: {
        shotIQ: 0.45,
        playmakingIQ: 0.1,
        discipline: 0,
        defensiveIQ: 0.45,
        categoryWeight: 0.1
    },
    offense: {
        close: 0.2,
        midRange: 0.15,
        threePoint: 0.1,
        freeThrow: 0.15,
        layup: 0.15,
        dunk: 0.15,
        postFade: 0.1,
        drawFoul: 0,
        ballHandle: 0,
        passing: 0,
        categoryWeight: 0.6
    },
    defense: {
        interiorDefense: 0.45,
        perimeterDefense: 0.1,
        block: 0.1,
        steal: 0,
        offensiveRebound: 0.05,
        defensiveRebound: 0.3,
        categoryWeight: 0.25
    }
};

export default pfWeights;
