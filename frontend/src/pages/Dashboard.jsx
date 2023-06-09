import React from 'react'
import { useEffect } from 'react'
import {useNavigate } from 'react-router-dom' //to redirect the user
import { useSelector, useDispatch } from 'react-redux' //to grab the user from the state to check if logged in or not
import TaskForm from '../components/TaskForm'
import Spinner  from '../components/Spinner'
import { getTasks, reset } from '../features/tasks/taskSlice'


/* ******* Tenth step - additional CRUD functionality in Service.js ********************** 
In Dashboard.jsx (or relevant component):
    -import { useDispatch } from 'react - redux' so we can navigate the user according to functionality.
    -import Spinner
    -import relevant function (getTasks etc) and reset(if nec.) from Slice.js file
    -initialize variable dispatch., assign to useDispatch()
    -as for state, save needed state and error handling properties to state handling function (useSelector() or others), (destructured). Pass arrow function into useSelector() etc., pass state into arrow function, and specify the part of the state that is needed  
      -pass state into useSelector (or other )
    -in useEffect():
      -add if statement and return message property of state to check for relevant errors
      -dispatch the relevant CRUD fucntion from taskSlice (in this case, getTasks fetches the tasks from the backend and puts it into tthe 'tasks' property of state, which is assigned to useSelector() here in component, so we can access in component.  )
      -reset the state (if necessary!) on unmount of component (when user leaves the dashboard we want the gotten tasks to clear from state). This can be done in useEffect() by simple returning an arrow function, and in the body of said fnctn, dispatching the reset (reset and getTasks need to be imported into component)
      -Add relevant state Redux properties to useEffect() dependencies array (for GET, isError, message, dispatch)
    -Add spinner component via if Statement before returnong component and subcomponents.
        -check if (isLoading) {return  <Spinner />}
    -Before adding code to display tasks/data on screen, use Redux devtools to see if the tasks/relevant data are showing up in state. Logout and login as another user to confirm functionality. 
  */
export default function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)  //user is coming from state.auth
    const {tasks, isLoading, isError, message} = useSelector((state) => state.tasks)

    //useEffect - make /login the default page (if user is not logged in, redirect to login page)
    useEffect(() => {
        if(isError) {
            console.log(message);
        }
        if(!user) {
            navigate('/login')
        }
        
        dispatch(getTasks())

    }, [user, navigate, dispatch, isError, message])

    if (isLoading) {
        return  <Spinner />
    }

         return <>
            <section className='heading'></section>
            <h1>Welcome {user && user.name}</h1>
            <p>Tasks Dashboard</p>

            <TaskForm />
         </>
}