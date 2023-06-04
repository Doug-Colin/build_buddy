import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify' //import so we can get the react toast container to show up
import 'react-toastify/dist/ReactToastify.css' //css for toastifyContainer
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
//mistaken import
// import { Toast } from 'react-toastify/dist/components' mistaken import

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
          </Routes>  
        </div>
      </Router>
      <ToastContainer />
    </>
   );
}

export default App;
