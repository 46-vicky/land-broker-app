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
        },
        editEmployee(state, action){
            return {
                ...state,
                allEmployees :state.allEmployees.map((employee)=>
                     employee.id === action.payload.id? {...employee, ...action.payload } : employee),
                }
            }  
        }
    })

export const employeeActions = employeeSlice.actions;
export default employeeSlice.reducer;