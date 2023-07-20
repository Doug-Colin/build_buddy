import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify' //import so we can get the react toast container to show up
import 'react-toastify/dist/ReactToastify.css' //css for toastifyContainer
import Header from './components/Header'
import Dashboard from './pages/DashboardPage'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import TaskSetter from './pages/TaskSetterPage'
import UnitConversion from './pages/unit-conversions/UnitConversionPage'
import Calculations from './pages/calculations/CalculationsPage'


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
            <Route path='/convert' element={<UnitConversion />} />
            <Route path='/calculate' element={<Calculations />} />
          </Routes>  
        </div>
      </Router>
      <ToastContainer />
    </>
   );
}

export default App;
