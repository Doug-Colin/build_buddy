import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
//useSelector selects something from state (user, isLoading, error etc)
//useDispatch is to dispatch a function like asyncThunk register or our reducer inside it
import  { useSelector, useDispatch } from 'react-redux'
//useNavigate is so we can redirect routes
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' //bring in toast
import { login, reset } from '../features/auth/authSlice' //bring in register and reset functions from authSlice
import Spinner from '../components/Spinner' //bring in Spinner component


//Login function is doing basically the same thing as Register.jsx, only instead of creating a user, it validates a user in the backend.

export default function Login() {
    //formData object will hold state for all form on this component (alt. each field its own state)
    const [formData, setFormData ] = useState({
        email: '',
        password: '',
    })
    
    const { email, password } = formData

    //initialize navigate and dispatch
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //select what we want from our state using useSelector
    //useSelector takes in a fn that has state passed in, in the fn we specify what part of the state we want to get this data from 
    const {user, isLoading, isError, isSuccess, message} = useSelector( (state) => state.auth)

    //upon change, above state properties will reset to true. So we want to watch for that with useEffect
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        //check if registration is successfull & promise fulfilled, our register fn extraReducers will update state prprty isSuccess to true
        //also check if user is already logged in with token & other info
        //if so navigate away from registration page to the dash
        if(isSuccess || user) {
            navigate('/')
        }

        //after checking for isSuccess/user, we want to reset the state, so dispatch the reset fn from authSlice & change State prpty's to false
        dispatch(reset)
    }, [user, isError, isSuccess, message, navigate, dispatch])

    // upon change, update the state via stateSetter
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {/* login logo, title, prompt */}
            <section className='"heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login and start building</p>
            </section>

            {/* this is our login form */}
            <section className='form'>
                <form  onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type='email' 
                            className='form-control' 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control' 
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Enter your password'
                            onChange={onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                        Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}