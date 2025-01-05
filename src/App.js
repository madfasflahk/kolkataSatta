import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginForm from './component/LoginForm'
import AdminDashBoard from './adminDashBoard/AdminDashBoard'
import Footer from './pages/Footer'
import YearlyData from './pages/YearlyData'

const App = () => {
  return (
    <>

      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:year" element={<YearlyData />} />
          <Route path="/userLogin" element={<LoginForm />} />
          <Route path="/adminDashBoard" element={<AdminDashBoard />} />
        </Routes>
      </BrowserRouter>

        <Footer/>
    </>
  )
}

export default App