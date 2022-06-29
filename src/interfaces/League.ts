import { PlayerObject } from "./Player";
import { Team } from "./Team";

export type FreeAgentPool = PlayerObject[];

interface LeagueData {
    teams: Team[],
    freeAgentPool: FreeAgentPool
}

export default LeagueData;
