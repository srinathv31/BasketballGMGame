export interface PlayerAttributes {
    overall: number,
    physical: PlayerPhysicalRatings,
    mental: PlayerMentalRatings,
    offense: OffensivePlayerSkillRatings,
    defense: DefensivePlayerSkillRatings
}

interface PlayerPhysicalRatings {
    speed: number,
    strength: number,
    vertical: number,
    injuryProne: number,
    categoryWeight?: number
}

interface PlayerMentalRatings {
    shotIQ: number,
    playmakingIQ: number,
    discipline: number,
    defensiveIQ: number,
    categoryWeight?: number
}

interface OffensivePlayerSkillRatings {
    close: number,
    midRange: number,
    threePoint: number,
    freeThrow: number,
    layup: number,
    dunk: number,
    postFade: number,
    drawFoul: number,
    ballHandle: number,
    passing: number,
    categoryWeight?: number
}

interface DefensivePlayerSkillRatings {
    interiorDefense: number,
    perimeterDefense: number,
    block: number,
    steal: number,
    offensiveRebound: number,
    defensiveRebound: number,
    categoryWeight?: number
}
