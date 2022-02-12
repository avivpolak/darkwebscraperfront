/** @format */

import { configureStore } from "@reduxjs/toolkit";

import pasteReducer from "../features/paste/pasteSlice.ts";
import statsReducer from "../features/stats/statsSlice.ts";

//import { loggingMiddleware } from "../middleweres/middleweres";

export const store = configureStore({
    reducer: {
        pasteReducer,
        statsReducer
    },
});

export default store;
