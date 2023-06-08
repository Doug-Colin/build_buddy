
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' //(Redux) these access the state to get the user for logout
import {logout, reset} from '../features/auth/authSlice'

export default function Header() {
    //initialize navigate/disp with useNavigate/useDis
     const navigate = useNavigate()
     const dispatch = useDispatch()
     //get our user from state vis redux useSelector as in Register.jsx/
     //useSelector takes in a function which takes in state, and we tell it where we want to get the state from
     const  {user} = useSelector((state) => state.auth)
    
     //onLogout event handler function for logout button
     //dispatch logout function, dispatch the state to reset state, navigate to dashboard
     const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
     }
    
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>TaskSetter</Link>
            </div>
            <ul>
                {user ? (
                    <li> 
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                 ) : (
                    <>
                      <li>
                        <Link to='/login'>
                          <FaSignInAlt /> Login
                        </Link>
                      </li>
                      <li>
                        <Link to='/register'>
                          <FaUser /> Register
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </header>
            )
          }