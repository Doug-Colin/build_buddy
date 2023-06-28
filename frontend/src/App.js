import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify' //import so we can get the react toast container to show up
import 'react-toastify/dist/ReactToastify.css' //css for toastifyContainer
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import TaskSetter from './pages/TaskSetter'
import Convert from './pages/Convert'
import Calculate from './pages/Calculate'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          {/* Only routes can go inside route tag */}
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/task-setter' element={<TaskSetter />} />
            <Route path='/convert' element={<Convert />} />
            <Route path='/calculate' element={<Calculate />} />
          </Routes>  
        </div>
      </Router>
      <ToastContainer />
    </>
   );
}

export default App;
