import { ShotAttempt } from "../../interfaces/Game";
import { randomNumberGenerator } from "../randomNumberGenerator";

export function createPointParameters(fgtype: ShotAttempt): { x: number, y: number } {
    const xParameter = randomNumberGenerator(38, 5);
    const yParameter = randomNumberGenerator(92, 8);
    if (fgtype === "threePoint" && isInside(0.5, 50, 35, xParameter, yParameter) === true) {
        return createPointParameters(fgtype);
    }
    if (fgtype !== "threePoint" && isInside(0.5, 50, 35, xParameter, yParameter) === false) {
        return createPointParameters(fgtype);
    }
    if (fgtype === "midRange" && checkMidRange(xParameter, yParameter, false) === false) {
        return createPointParameters(fgtype);
    }
    if ((fgtype === "close" || fgtype === "layup") && checkMidRange(xParameter, yParameter, true) !== false) {
        return createPointParameters(fgtype);
    }
    if (fgtype === "dunk") {
        const pointParametersCopy = { x: randomNumberGenerator(10, 13), y: randomNumberGenerator(53, 47) };
        return pointParametersCopy;
    }
    const pointParametersCopy = { x: xParameter, y: yParameter };
    return pointParametersCopy;
}

export function circleEquation(x: number, y: number, fgtype: ShotAttempt, player: string) {
    console.log(isInside(0.5, 50, 35, x, y));
    console.log(`${player}: ${fgtype}`);
    console.log(`${x}, ${y}`);
}

function isInside(circle_x: number, circle_y: number, rad: number, x: number, y: number) {
 
    // Compare radius of circle with
    // distance of its center from
    // given point
 
    if (Math.pow(x - circle_x, 2) + (Math.pow(y - circle_y, 2)/1.45) < Math.pow(rad, 2)) {
        return true;
    } else {
        return false;
    }
}

function checkMidRange(x: number, y: number, closeShot: boolean) {
    if (closeShot === false && (y > 85 || y < 18)) {
        return false;
    }
    if (y > 40 && y < 60) {
        if (x > 21) {
            return true;
        }
        return false;
    }
    return true;
}
