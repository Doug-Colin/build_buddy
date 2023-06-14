import { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { updateTask } from "../features/tasks/taskSlice";

const Modal = ({ showModal, modalData, onClose }) => {
  const task = modalData;
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  // const saySomething = () => {
  //   console.log('Saying');
  // }

  useEffect(() => {
    const fetchData = () => {
      setTaskText(task.text);
    };


    fetchData();
  }, [task, onClose]);
  

  // Show modal
  if (!showModal || !modalData) return null;

  // if (showModal) setTaskText(modalData.text);

  

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateTask({id: task._id, text: taskText }));
    setTaskText('');
  }

  return (
    modalData ? (
      <div onClick={onClose} className='modal-overlay'>
      <div onClick={(e) => { e.stopPropagation()}} className='container-modal'>
        <FaTimes className='modal-close' onClick={onClose}>
            Close
        </FaTimes>
        <div className='modal-content'>
          <h2>Update Task Description</h2>
          <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text"><b>Task</b></label>
                    {/* <input type="text" name='text' id='text' value={taskText || ''} onChange={handleInputChange} required/> */}
                    <textarea name='text' id='text' value={taskText || ''} onChange={handleInputChange} rows="4" required ></textarea>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>
                        Update Task
                    </button>
                </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    ) : (
      <Spinner />
    )
  )
};

export default Modal