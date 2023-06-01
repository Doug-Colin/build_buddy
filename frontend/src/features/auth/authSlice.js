// features/auth: this folder represents the auth part of our Global State
// features/auth/authSlice.js: redux reducers and initial state go here 
// In Redux, a slice refers to a portion of the Redux store that is responsible for managing a specific part of the application state. A Redux slice encapsulates the actions, reducers, and initial state related to a particular feature or domain of your application. It helps organize and modularize your Redux code by grouping related functionality together.

//enables ;;async functions and ability to create initial state from the server
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Get user from local storage
//need JSON web token in order to access protected routes, so we'll grab it from user's local storage. 
//loc. storage can only have strings, so we'll have to parse the JSON
const user = JSON.parse(localStorage.getItem('user'))

//if issues with authState, view in redux toolkit 
const initialState = {
    user: user ? user : null,  //if there's a user, use it, otherwise null
    isError: false,    //will be made true if server responds with error, so we can handle error
    isSuccess: false,  //will be made true if server req/res is successfull.
    isLoading: false,  //used for loading spinner
    message: '',
}

//create the slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    //anything defined in reducers won't be asynchronous and won't be thunk functions
    //reset (regular reducer func.) enables resetting state to default values (for ex. after registering new user)
    reducers: { 
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }, 
    },
    extraReducers: () => {} //async & thunk functions go here
})

//export authSlice so we can import it in src/app/store.js
//reducers like reset must be exported from authSlice.actions

export const { reset } = authSlice.actions
export default authSlice.reducer