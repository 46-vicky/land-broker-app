import { createSlice } from "@reduxjs/toolkit";

const initialFlatValues = {
    allFlats : [],
    isFetchDone : false
}

const flatSlice = createSlice({
    name:"flats",
    initialState:initialFlatValues,
    reducers:{
        setAllFlats(state,action){
            state.allFlats = action.payload.flats
        },
        setFetchDone(state) {
            state.isFetchDone = true;
        }
    }

})
export const flatAction = flatSlice.actions;
export default flatSlice.reducer;