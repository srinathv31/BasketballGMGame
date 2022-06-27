import { SeasonResult } from "./Team";

export interface Coach {
    id: number,
    name: string,
    offStyle: string,
    defStyle: string,
    quality: number,
    record: Record<number, SeasonResult>
}
