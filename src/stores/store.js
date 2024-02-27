import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import planReducer from "./planSlice";
import employeeReducer from "./employeeSlice";
import flatReducer from "./flatSlice";

export const store = configureStore({
    reducer : {
        auth: authReducer,
        plans: planReducer,
        employees:employeeReducer,
        flats:flatReducer,
    },
})
