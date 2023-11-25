import { createSlice } from "@reduxjs/toolkit";

const isLogin = JSON.parse(localStorage.getItem("login-status"));
const userName = JSON.parse(localStorage.getItem("user-name"))

const initialValues = {
    isLoggedIn : isLogin,
    userName : userName
}
const authSlice = createSlice({
    name :"auth",
    initialState:initialValues,
    reducers:{
        loginUser(state,action){
            localStorage.setItem("login-status",JSON.stringify(action.payload.isLoggedIn))
            localStorage.setItem("user-name",JSON.stringify(action.payload.userName))
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userName = action.payload.userName
        },
        logoutUser(state){
            localStorage.removeItem("login-status")
            localStorage.removeItem("user-name")
            state.isLoggedIn = false;
            state.userName = ""
        }
    }
})

export const loggedUserDetail = (state) => state.auth;
export default authSlice.reducer;
export const authReducer = authSlice.actions;