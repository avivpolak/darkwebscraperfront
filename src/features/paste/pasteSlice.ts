/** @format */
import { createSlice } from "@reduxjs/toolkit";

export interface Paste {
    [key: string]: string;
}
// const defaultData = [
//     { title: "string", labels: "string", author: "string", date: "string" },
// ];
const initialState: Paste[] = [];
export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
      add: (state, action) => {
          const newPastes: Paste[] = action.payload;
        const diff = newPastes.filter(
            (newPaste) => !state.some((paste) => paste.title === newPaste.title))
            diff.forEach((item) => {
              if (!state.includes(item)) {
                  state.push(item);
              }
          });
      },
  },
});

export const { add } = pasteSlice.actions;
export const selectEquipment = (state: any) => state.pasteSlice;
export default pasteSlice.reducer;