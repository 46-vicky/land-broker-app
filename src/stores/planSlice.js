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
            state.allPlans = action.payload.plans
        },
        setFetchDone(state) {
            state.isFetchDone = true;
        },
        editPlan(state,action){
            return{
                ...state,
                allPlans: state.allPlans.map((plan)=>(
                    plan.id === action.payload.id ? {...plan, ...action.payload } : plan),
                )
            }
        }
    },
})

export const planActions = planSlice.actions;
export default planSlice.reducer;