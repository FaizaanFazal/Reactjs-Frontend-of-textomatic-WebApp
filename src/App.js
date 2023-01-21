import React from 'react'
import './styles/style.css'
import './styles/mobstyles.css'
import { BrowserRouter,
  Routes,
  Route,
  Navigate, } from "react-router-dom"

import Home from './pages/Home'
import AdminDashbaord from './pages/AdminDashbaord'
import UserDashboard from './pages/UserDashboard'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import AnalysisPage from './pages/AnalysisPage'
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import  {Datacleaning}  from './components/tools/Datacleaning'


export default function App() {

  const ProtectedRoute=({children})=>{
    const {user} =useContext(AuthContext);
    if(!user){
      return <Navigate to="/userLogin"/>;
    }
    return children
  }
  const AdminProtectedRoute=({children})=>{
    const {user} =useContext(AuthContext);
    if(!user.isAdmin){
      return <Navigate to="/userLogin"/>;
    }
    return children
  }

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/adminDashboard' element={<AdminProtectedRoute><AdminDashbaord/></AdminProtectedRoute>} />
          <Route  path='/userDashboard' element={<UserDashboard/>} />
          <Route  path='/userLogin' element={<UserLogin/>} />
          <Route  path='/userSignup' element={<UserSignup/>} />
          <Route  path='/datacleaning' element={<Datacleaning/>} /> 
          <Route  path='/analysistool' element={<AnalysisPage/>} />   
          
        </Routes>
      
      </BrowserRouter>
    </>
  )
}
