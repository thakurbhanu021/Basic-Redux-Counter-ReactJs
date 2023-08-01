import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {isAutheticated: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAutheticated = true
        },
        logout(state){
            state.isAutheticated = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer; 