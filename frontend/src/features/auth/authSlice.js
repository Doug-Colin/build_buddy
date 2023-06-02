// features/auth: this folder represents the auth part of our Global State
// features/auth/authSlice.js: redux reducers and initial state go here 
// In Redux, a slice refers to a portion of the Redux store that is responsible for managing a specific part of the application state. A Redux slice encapsulates the actions, reducers, and initial state related to a particular feature or domain of your application. It helps organize and modularize your Redux code by grouping related functionality together.
// Benefit of using redux toolkit is server response automatically goes into pending, fulfilled, or rejected (in authSlice), so we don't have to manually handle  

//enables async functions & ability to create initial state from the server
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import our authService http request file so we can use the register function
import authService from './authService'

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

// Register user - async thunk function
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user) //returns the payload coming back from register fnctn in the service
    } catch (error) {
        //check for error messages wherever they could come from the server
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString
        //error/failed request will reject and send the error message with the payload 
        return thunkAPI.rejectWithValue(message)   
    }
})

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
    //async & thunk functions go here
    //extraReducers handle the different states of the registration process  (pending/fulfilled/succesfull) and update state accordingly
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload //update state mssg prprty with action.payload (error message) to return in above catch block
                state.user = null
            })  
    } 
})

//export authSlice so we can import it in src/app/store.js
//reducers like reset must be exported from authSlice.actions

export const { reset } = authSlice.actions
export default authSlice.reducer