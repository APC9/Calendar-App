import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking' 'authenticated' 'no-authenticated'
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking:( state )=>{
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } )=>{
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage =  undefined;
        },
        onloadUser: ( state )=>{
            state.status = 'authenticated';
            state.user = JSON.parse( localStorage.getItem('usuario') )
        },
        onLogout:( state, { payload } )=>{
            state.status = 'no-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state )=>{
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const {  
    clearErrorMessage,
    onChecking,
    onLogin,
    onLogout,
    onloadUser
} = authSlice.actions;