// ModalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false },
  reducers: {
    isModalOpen: (state) => {
      state.isOpen = true;
    },
    isModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { isModalOpen, isModalClose } = modalSlice.actions;
export default modalSlice.reducer;
