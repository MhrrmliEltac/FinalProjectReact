// store.js
import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./Slice/ModalSlice";

export default configureStore({
  reducer: {
    modal: ModalSlice
  },
});
