import { ShotAttempt } from "../../interfaces/Game";
import { randomNumberGenerator } from "../randomNumberGenerator";

export function createPointParameters(fgtype: ShotAttempt): { x: number, y: number } {
    const xParameter = randomNumberGenerator(165, 20);
    const yParameter = randomNumberGenerator(195, 5);
    if (fgtype === "threePoint" && isInside(35, 100, 100, xParameter, yParameter) === true) {
        return createPointParameters(fgtype);
    }
    if (fgtype !== "threePoint" && isInside(35, 107, 100, xParameter, yParameter) === false) {
        return createPointParameters(fgtype);
    }
    if (fgtype === "midRange" && checkMidRange(xParameter, yParameter) === false) {
        return createPointParameters(fgtype);
    }
    if ((fgtype === "close" || fgtype === "layup") && checkMidRange(xParameter, yParameter) !== false) {
        return createPointParameters(fgtype);
    }
    if (fgtype === "dunk") {
        const pointParametersCopy = { x: randomNumberGenerator(50, 40), y: randomNumberGenerator(115, 100) };
        return pointParametersCopy;
    }
    const pointParametersCopy = { x: xParameter, y: yParameter };
    return pointParametersCopy;
}

export function circleEquation(x: number, y: number, fgtype: ShotAttempt) {
    console.log(isInside(35, 100, 100, x, y));
    console.log(fgtype);
}

function isInside(circle_x: number, circle_y: number, rad: number, x: number, y: number) {
 
    // Compare radius of circle with
    // distance of its center from
    // given point
 
    if (Math.pow(x - circle_x, 2) + (Math.pow(y - circle_y, 2)*1.3) <= Math.pow(rad, 2)) {
        return true;
    } else {
        return false;
    }
}

function checkMidRange(x: number, y: number) {
    if (y > 80 && y < 135) {
        if (x > 70) {
            return true;
        }
        return false;
    }
    return true;
}
