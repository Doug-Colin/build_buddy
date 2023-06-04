import React from 'react'
import { useState, useEffect } from 'react'
//useSelector selects something from state (user, isLoading, error etc)
//useDispatch is to dispatch a function like asyncThunk register or our reducer inside it
import  { useSelector, useDispatch } from 'react-redux'
//useNavigate is so we can redirect routes
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' //bring in toast
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice' //bring in register and reset functions from authSlice
import Spinner from '../components/Spinner' //bring in Spinner component


/*  Understanding how this file relates to the backend:
        -login a user, frontend will redirect to dashboard
        -using redux toolkit in Chrome devtools (Ctrl+shift+i > click '>>' and select Redux ), under Actions top tab, select 'State' bottom tab and select 'Tree'. Drill down into the state properties and you can now see that the user's email, _id, name, and token.  
        -the reason we have all that is because in /backend/controllers/userController, in register where 
*/
export default function Register() {
    //formData object will hold state for all form on this componeent (alt. each field its own state)
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    
    //destructure form data
    const { name, email, password, password2 } = formData 

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
    
    //on submission we want to dispatch our register asyncThunk function from authSlice 
    const onSubmit = (e) => {
        e.preventDefault()
        //check to make sure passwords match
        if(password !== password2) {
            toast.error('Passwords do not match')
            //register fn takes in user data, so initialize object with the properties from the form
        } else {
            const userData = {
                name,
                email,
                password,
            }
                //dispatch our register fn from authSlice, into which the user is passed
            dispatch(register(userData))  
        }
    }

    //check if state isloading, if so, return Spinner component
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='"heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>
            {/* this is our registration form */}
            <section className='form'>
                <form  onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='name' 
                            name='name' 
                            value={name} 
                            placeholder='Enter your name'
                            onChange={onChange}
                        />
                    </div>
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
                        <input 
                            type='password2' 
                            className='form-control' 
                            id='password2' 
                            name='password2' 
                            value={password2} 
                            placeholder='Confirm password'
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