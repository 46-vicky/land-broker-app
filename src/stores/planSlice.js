import { createSlice } from "@reduxjs/toolkit";

const initialPlanValues = {
    allPlans : [],
    isFetchDone : false,
}

const planSlice = createSlice({
    name : "plans",
    initialState: initialPlanValues,
    reducers:{
        setAllPlans(state, action) {
            console.log(action.payload);
            state.allPlans = action.payload.plans
        },
        setFetchDone(state) {
            state.isFetchDone = true;
        }
    },
})


export default planSlice.reducer;

export const planReducer = planSlice.actions;