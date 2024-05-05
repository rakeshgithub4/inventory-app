import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/index"
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk,logger)
})

export default store;