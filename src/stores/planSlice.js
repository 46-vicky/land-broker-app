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
<<<<<<< HEAD
export default planSlice.reducer;
=======
export default planSlice.reducer;
>>>>>>> 7ebe6d333894f13e4ea39b69fdae37555b9e05c8
