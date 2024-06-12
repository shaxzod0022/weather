import { configureStore } from "@reduxjs/toolkit";
import counterMovie from "./counterMovie";

export default configureStore({
  reducer: {
    counter: counterMovie,
  },
});
