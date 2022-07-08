export function calculateTimeLeft(currTime: string) {
    const minutes = currTime.slice(0,2);
    const seconds = currTime.slice(3,5);
    const totalTimeInSeconds = (+minutes*60)+(+seconds);
    console.log(totalTimeInSeconds);
    
    if (totalTimeInSeconds < 15){
        return "00:00";
    }

    const secondsRem = Math.floor(totalTimeInSeconds - 15);

    const newMinute = Math.floor(secondsRem/60);
    const newSecondsRaw = ((secondsRem/60) - newMinute).toFixed(1);
    const newSeconds = +newSecondsRaw*60;

    const strMinute = newMinute < 10 ? "0"+newMinute : newMinute;
    const strSecond = newSeconds < 10 ? "0"+newSeconds : newSeconds;

    console.log(`${strMinute} ${strSecond}`);
    return `${strMinute}:${strSecond}`;
}
