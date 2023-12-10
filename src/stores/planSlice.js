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
            console.log(action.payload.plans);
            state.allPlans = action.payload.plans
        },
        setFetchDone(state) {
                        state.isFetchDone = true;
        }
    },
})

export const planActions = planSlice.actions;
export default planSlice.reducer;
