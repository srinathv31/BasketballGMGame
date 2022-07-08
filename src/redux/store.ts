import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./indexSlice";
import teamsReducer from "./teamsSlice";

export const store = configureStore({
    reducer: {
        indexTracker: indexReducer,
        teamsTracker: teamsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
