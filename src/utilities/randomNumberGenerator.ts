export function randomNumberGenerator(max: number, min?: number) {
    if (min) {
        return Math.floor(Math.random() * (max+1 - min) + min);
    } else {
        return Math.floor(Math.random() * max);
    }
}

export function weightedRandomNumberGenerator(max: number, min: number, weight: number) {
    const weighted = Math.pow(Math.random(), weight);
    const scaled = Math.floor(weighted * (max - min + 1)) + min;
    return scaled;
}
