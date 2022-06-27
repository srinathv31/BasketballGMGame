import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./indexSlice";

export const store = configureStore({
    reducer: {
        indexTracker: indexReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
