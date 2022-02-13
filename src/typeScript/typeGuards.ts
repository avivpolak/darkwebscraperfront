import { Alerts } from "../features/alerts/alertsSlice";

export const isAlerts = (alerts:unknown):alerts is Alerts=>{

        if (!Array.isArray(alerts)) {
            return false;
        }
    
        if (alerts.some((v) => typeof v !== "string")) {
            return false;
        }
    
        return true;
    
}