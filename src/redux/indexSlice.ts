
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IndexState {
    value: number
}

const initialState: IndexState = {
    value: 1
};

export const indexSlice = createSlice({
    name: "indexTracker",
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        setByValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
});

export const { increment, decrement, setByValue } = indexSlice.actions;

export const selectIndex = (state: RootState) => state.indexTracker.value;

export default indexSlice.reducer;
