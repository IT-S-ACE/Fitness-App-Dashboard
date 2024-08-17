import React from 'react'
import { useCoachLogOut } from '../../hook/Coach/useCoachLogOut'
import { LoginOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const CoachHeader = () => {
  
  const {mutate : LogOut} = useCoachLogOut()

  const handleLogOut = (e) => {
    e.preventDefault()
    LogOut()
  }

  const navigate = useNavigate()

  const handleEditProfile = (e) =>{
    e.preventDefault()
    navigate('/introduction')
  }

  return (
    <div>
        <header className="fixed w-full flex justify-between items-center px-20 py-4 z-50 bg-black">
      <a href="#" className="text-white text-4xl font-bold">GYM</a>
      <nav className="flex space-x-10">
        <a href="#services" className="text-white hover:text-purple-500">Trainers</a>
        <a href="#projects" className="text-white hover:text-purple-500">Plans</a>
        <a href="#Contact" className="text-white hover:text-purple-500">Meals</a>
        <a href="#Contact" className="text-white hover:text-purple-500" onClick={handleEditProfile}>Edit Profile</a>
        <a href="#Contact" className="text-white bg-red-600 rounded-lg p-1 hover:text-black " onClick={handleLogOut}>Log Out <LoginOutlined /></a>
      </nav>
    </header>
    </div>
  )
}

export default CoachHeader