/** @format */
import { createSlice } from "@reduxjs/toolkit";

export interface stats {
    [key: string]: string | number[];
}
const defaultStats = {
    persentage: [
        7.042253521126761, 4.225352112676056, 4.225352112676056,
        5.633802816901409, 1.4084507042253522, 7.042253521126761,
        2.8169014084507045, 1.4084507042253522, 1.4084507042253522,
        1.4084507042253522, 2.8169014084507045, 1.4084507042253522,
        2.8169014084507045, 2.8169014084507045,
    ],
    labels: [
        "Business & Industrial",
        "Computers & Electronics,Computer Security",
        "Finance,Investing,Currencies & Foreign Exchange",
        "Adult",
        "Computers & Electronics,Computer Security,Hacking & Cracking",
        "Sensitive Subjects",
        "Real Estate,Real Estate Services",
        "Computers & Electronics",
        "Online Communities",
        "Shopping,Apparel,Clothing Accessories",
        "Arts & Entertainment",
        "Finance,Banking",
        "Shopping,Consumer Resources",
        "Arts & Entertainment,Music & Audio",
    ],
};
const initialState: stats = {};
export const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        update: (state, action) => {
            const newstats: stats = action.payload;
            state = newstats;
        },
    },
});

export const { update } = statsSlice.actions;
export const selectEquipment = (state: any) => state.statsSlice;
export default statsSlice.reducer;
