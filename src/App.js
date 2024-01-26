import Login from './pages/login';  // Correct the import statement for Login
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import CirclesAnimation from './pages/CirclesAnimation';
import './pages/CirclesAnimation.css';
import './App.css';


function App() {
  return (
    <>
   <CirclesAnimation/>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='*' element={<Error />} />
        <Route path='/CirclesAnimation' element={<CirclesAnimation />} />
      </Routes>
      
    </>
  );
}

export default App;

