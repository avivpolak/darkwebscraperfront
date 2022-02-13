/** @format */
import { createSlice } from "@reduxjs/toolkit";
import { isAlerts } from "../../typeScript/typeGuards";

export type Alerts = string[];
// const defaultData = [
//     { title: "string", labels: "string", author: "string", date: "string" },
// ];
const initialState: Alerts = [];
export const alertsSlice = createSlice({
    name: "alerts",
    initialState,
    reducers: {
        add: (state, action) => {
            const newAlerts = action.payload;
            if (isAlerts(newAlerts)) {
                const alerts: Alerts = newAlerts.map((alert) =>
                    alert.toLowerCase()
                );
                const diff = alerts.filter(
                    (alert) => !state.includes(alert)
                );
                diff.forEach((item) => {
                    if (!state.includes(item)) {
                        state.push(item);
                    }
                });
            }
        },
        remove: (state, action) => {
            const newAlertsToRemove = action.payload;
            if (isAlerts(newAlertsToRemove)) {
                const alertsToRemove: Alerts = newAlertsToRemove.map((alert) =>
                    alert.toLowerCase()
                );
              state = state.filter((alert)=>!alertsToRemove.includes(alert.toLowerCase()))
            }
        },
    },
});

export const { add } = alertsSlice.actions;
export const selectEquipment = (state: any) => state.alertsSlice;
export default alertsSlice.reducer;
