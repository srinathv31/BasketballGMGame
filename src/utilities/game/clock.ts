import { randomNumberGenerator } from "../randomNumberGenerator";

export function calculateTimeLeft(currTime: string) {
    // Grab minutes and seconds from string
    const minutes = currTime.slice(0,2);
    const seconds = currTime.slice(3,5);
    // convert minutes and seconds into totalSeconds
    const totalTimeInSeconds = (+minutes*60)+(+seconds);

    // generate random time of possession
    const timeOfPossesion = randomNumberGenerator(24, 7);

    if (totalTimeInSeconds < timeOfPossesion){
        return "00:00";
    }

    const secondsRem = Math.floor(totalTimeInSeconds - timeOfPossesion);

    const newMinute = Math.floor(secondsRem/60);
    const newSecondsRaw = ((secondsRem/60) - newMinute).toFixed(1);
    // convert secondsRaw (.1 -> .9) into seconds (00:x)
    const newSeconds = +newSecondsRaw*60;

    const strMinute = newMinute < 10 ? "0"+newMinute : newMinute;
    const strSecond = newSeconds < 10 ? "0"+newSeconds : newSeconds === 60 ? "59" : newSeconds;

    // console.log(`${strMinute}:${strSecond}`);
    return `${strMinute}:${strSecond}`;
}
