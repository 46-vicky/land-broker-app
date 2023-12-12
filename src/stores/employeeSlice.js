import { createSlice } from "@reduxjs/toolkit";

const initialEmployeeValues = {
    allEmployees :[],
    isFetchDone : false,
}

const employeeSlice = createSlice({
    name:"employees",
    initialState:initialEmployeeValues,
    reducers:{
        setAllEmployees(state, action) {
            state.allEmployees = action.payload.employees
        },
        setFetchDone(state) {
            state.isFetchDone = true;
        }
    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice.reducer;