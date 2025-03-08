import { createSlice } from "@reduxjs/toolkit";
import {SeminarType} from "../../types/types";

type seminarsState = {
  value: Array<SeminarType>;
};

const initialState: seminarsState = {
  value: [],
};

const seminarsSlice = createSlice({
  name: "seminars",
  initialState,
  reducers: {
    getSeminars: (state, action) => {
      state.value = action.payload;
    },
    deleteSeminar: (state, action) => {
      const newArr = state.value.filter((el) => action.payload !== el.id);
      state.value = newArr;
    },
    editSeminar: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value.splice(index, 1, action.payload);
    },
  },
});

export const { getSeminars, deleteSeminar, editSeminar } = seminarsSlice.actions;

export default seminarsSlice.reducer;
