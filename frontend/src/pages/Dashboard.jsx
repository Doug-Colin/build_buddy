import React from 'react'
import { useEffect } from 'react'
import {useNavigate, userNavigate} from 'react-router-dom' //to redirect the user
import { useSelector } from 'react-redux' //to grab the user from the state to check if logged in or not
import TaskForm from '../components/TaskForm'

export default function Dashboard() {
    const navigate = useNavigate()

    const {user} =useSelector((state) => state.auth)  //user is coming from state.auth

    //useEffect - make /login the default page (if user is not logged in, redirect to login page)
    useEffect(() => {
        if(!user) {
            navigate('/login')
        }     
    }, [user, navigate])

         return <>
            <section className='heading'></section>
            <h1>Welcome {user && user.name}</h1>
            <p>Tasks Dashboard</p>

            <TaskForm />
         </>
}