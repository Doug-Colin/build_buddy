import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'

export default function TaskForm() {
    //add the state for this form
    const [text, setText] = useState('')

    //iniitalize dispatch
    const dispatch = useDispatch()


    const onSubmit = e => {
        e.preventDefault()

        dispatch(createTask({text}))
        setText('')
    }

    return (
        //when user submits this, we want to call our dispatch a thunk function from our slice/redux
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor="text">Task</label>
                    <input 
                        type='text'
                        name='text'
                        id='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form group'>
                    <button className='btn btn-block'type='submit'>Add Task</button>
                </div>
            </form>
        </section>
        )
}