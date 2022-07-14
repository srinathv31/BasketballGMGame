import { ShotAttempt } from "../../interfaces/Game";
import { randomNumberGenerator } from "../randomNumberGenerator";

export function createPointParameters(fgtype: ShotAttempt): { x: number, y: number } {
    const xParameter = randomNumberGenerator(150, 20);
    const yParameter = randomNumberGenerator(220, 20);
    if (fgtype === "threePoint" && isInside(40, 120, 100, xParameter, yParameter) === true) {
        return createPointParameters(fgtype);
    }
    if (fgtype !== "threePoint" && isInside(40, 120, 100, xParameter, yParameter) === false) {
        return createPointParameters(fgtype);
    }
    if (fgtype === "midRange" && checkMidRange(xParameter, yParameter) === false) {
        return createPointParameters(fgtype);
    }
    if ((fgtype === "close" || fgtype === "layup") && checkMidRange(xParameter, yParameter) !== false) {
        return createPointParameters(fgtype);
    }
    if (fgtype === "dunk") {
        const pointParametersCopy = { x: randomNumberGenerator(50, 40), y: randomNumberGenerator(130, 110) };
        return pointParametersCopy;
    }
    const pointParametersCopy = { x: xParameter, y: yParameter };
    return pointParametersCopy;
}

export function circleEquation(x: number, y: number, fgtype: ShotAttempt, player: string) {
    console.log(isInside(40, 120, 100, x, y));
    console.log(`${player}: ${fgtype}`);
}

function isInside(circle_x: number, circle_y: number, rad: number, x: number, y: number) {
 
    // Compare radius of circle with
    // distance of its center from
    // given point
 
    if (Math.pow(x - circle_x, 2) + (Math.pow(y - circle_y, 2)*1.22) < Math.pow(rad, 2)) {
        return true;
    } else {
        return false;
    }
}

function checkMidRange(x: number, y: number) {
    if (y > 95 && y < 145) {
        if (x > 80) {
            return true;
        }
        return false;
    }
    return true;
}
