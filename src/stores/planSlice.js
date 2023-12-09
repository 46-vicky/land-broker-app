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
>>>>>>> 046b3ffae3acd4320d1106f4b6f884c727db143a
