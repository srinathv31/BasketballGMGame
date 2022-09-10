
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../interfaces/Team";
import TeamGenerator from "../utilities/testing/teamGenerator";
import { RootState } from "./store";

interface TeamState {
    value: Team[]
}

const initialState: TeamState = {
    value: TeamGenerator()
};

export const teamsSlice = createSlice({
    name: "teamsTracker",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Team[]>) => {
            state.value = { ...action.payload };
        }
    }
});

export const { update } = teamsSlice.actions;

export const selectIndex = (state: RootState) => state.teamsTracker.value;

export default teamsSlice.reducer;
