// import React from 'react'
// import { useEffect } from 'react'
// import {useNavigate } from 'react-router-dom' //to redirect the user
// import { useSelector, useDispatch } from 'react-redux' //to grab the user from the state to check if logged in or not
// import Spinner  from '../components/Spinner'
// import { reset } from '../features/auth/authSlice'
// import { PiNotePencil, PiChartLine, PiMathOperations} from "react-icons/pi";


// export default function LandingPage() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const {user} = useSelector((state) => state.auth)  //user is coming from state.auth
//     // const {tasks, isLoading, isError, message} = useSelector((state) => state.tasks)

//     //useEffect - make /login the default page (if user is not logged in, redirect to login page)
//     // useEffect(() => {
//     //     if(isError) {
//     //         console.log(message);
//     //     }
//     //     if(!user) {
//     //         navigate('/login')
//     //     }
        
//     //     dispatch(getTasks())
        
//     //     return () => {
//     //         dispatch(reset())
//     //       }
//     // }, [user, navigate, isError, message, dispatch])

//     // if (isLoading) {
//     //     return  <Spinner />
//     // }

//     return (
//         <>
//           <section className='heading'>
//             <h1>Build Buddy</h1>
//           </section>
//           <section className='content'>
//               <div className='value-pitch'>
//                 <p>Being an independent artist, craftsman, or manufacturer is full of challenges, and building a well functioning and good looking product is only one of them. Finding time to do so while balancing the chores of running a business is another. Build Buddy helps you take care of the annoying parts of running a creative business so you can spend more time doing what you do best.</p>      
//                 {/* <p>Being an independent artist, craftsman, or manufacturer is full of challenges. Building a well functioning and good looking product is one. Finding time to do so while balancing the chores of running a business is another.</p>
//                 <p>Large companies know this. They let their creative employees concentrate on building things by managing their business with expensive software and additional hires. But for most small businesses, this simply isn't an option.</p>
//                 <p>Build Buddy helps you take care of the annoying parts of running a small creative business- so you can spend more time doing what you do best.</p> */}
//               </div>
//               <h1>Let Build Buddy help you build better.</h1>
//               <section className='value-cards'>
//                 <div>
//                   <PiMathOperations className='math-icon'/> <h3>Make industry specific calculations</h3>
//                 </div>
//                 <div>
//                   <PiChartLine className='chart-icon'/>
//                   <h3>Make accurate estimates by tracking costs</h3>
//                 </div>
//                 <div>
//                   <PiNotePencil className='note-icon'/>
//                   <h3>Save calculations, images, and notes to individual projects</h3>
//                 </div>
//               </section>

              
        
//           </section>
//         </>
//       )
// }

