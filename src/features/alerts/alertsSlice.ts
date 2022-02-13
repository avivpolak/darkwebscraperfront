/** @format */
import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-bootstrap";
import { isAlert, isAlerts } from "../../typeScript/typeGuards";
import { Paste } from "../paste/pasteSlice";

export type Alerts = Alert[];
export interface Alert {
    paste: Paste;
    keywords: string[];
    isFullMatch: boolean;
}
// const defaultData = [
//     { title: "string", labels: "string", author: "string", date: "string" },
// ];
const initialState: Alert[] = [];
export const alertsSlice = createSlice({
    name: "alerts",
    initialState,
    reducers: {
        addAlert: (state, action) => {
            const newAlert: Alert = action.payload;
            console.log(newAlert)
            if (isAlert(newAlert) && !isInAlerts(state,newAlert.paste.title)) {
                state.push(newAlert);
            }
        },
        remove: (state, action) => {
            const newTitleToRemove = action.payload;
            if (typeof newTitleToRemove === "string") {
                console.log(newTitleToRemove)
                state = state.filter((alert) => {
                    return alert.paste.title !== newTitleToRemove;
                });
                console.log(state)
            }
        },
    },
});
const isInAlerts=((state:any,title:string)=>{
    for(let alert of state){
        if (alert.paste.title === title){
            return true
        }
    }
    return false
})
export const { addAlert,remove } = alertsSlice.actions;
export const selectEquipment = (state: any) => state.alertsSlice;
export default alertsSlice.reducer;
