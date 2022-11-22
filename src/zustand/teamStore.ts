import create from "zustand";
import { Team } from "../interfaces/Team";
import TeamGenerator from "../utilities/testing/teamGenerator";

interface TeamState {
    teamState: Team[]
}

export const useTeamStore = create<TeamState>((set) => ({
    teamState: TeamGenerator()
}));
