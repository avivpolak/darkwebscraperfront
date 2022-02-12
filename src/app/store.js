/** @format */

import { configureStore } from "@reduxjs/toolkit";

import pasteReducer from "../features/paste/pasteSlice.ts";


//import { loggingMiddleware } from "../middleweres/middleweres";

export const store = configureStore({
    reducer: {
        pasteReducer,

    },
});

export default store;
