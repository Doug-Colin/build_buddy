import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'


export default function Register() {
    //(alternative is each field being a separate form of state)
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    
    const { name, email, password, password2 } = formData

    // upon change, update the state via stateSetter
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
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
                        <button type='submit' className='btn btn-block'/>
                    </div>
                </form>

            </section>
        </>
    )
}