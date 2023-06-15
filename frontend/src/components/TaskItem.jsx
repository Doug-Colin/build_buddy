// /* **** Eleventh step - Create new component to display content- (see Dashboard.jsx > TaskItem.jsx) ***** 
// -import React (add other necessary imports as you go)
// -pass destructured data ({task}) into component as arg 
// -add <div> with relevant className
// -add sub <div> with jsx necessary to diplay relevant date (can include date via .createdAt from other part of proj.)
// -import component into Dashboard (or other parent component)
// */

// import React from "react"
// import { useDispatch } from 'react-redux' 
// import { deleteTask } from '../features/tasks/taskSlice'


// export default function TaskItem({task}) {

//     const dispatch = useDispatch()

//     return (
//         <div className="task">
//             <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
//             <h2>{task.text}</h2>
//             <button onClick={() => dispatch(deleteTask(task._id))} className="close">
//                 X
//             </button>
//         </div>
//     )
// }

//-------------------------------------------------- Update via Modal -----------------------------

import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Modal from './Modal';
import { useState } from 'react';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const showModalData = () => {
    setModalData(task)
    setShowModal(true);
  }

  return (
    <>
    <div className='task'>
        <div className="action-buttons">
            <div className="edit" onClick={()=> {showModalData()}}>
                <FaPencilAlt/>
            </div>
            <div className="delete" onClick={() => dispatch(deleteTask(task._id))}>
                <FaTimes />
            </div>
        </div>
        <div>
            {new Date(task.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{task.text}</h2>
    </div>
    <Modal showModal={showModal} onClose={() => setShowModal(false)} modalData={modalData} />
    </>
  )
}

export default TaskItem