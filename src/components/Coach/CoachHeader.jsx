import React from 'react'

const CoachHeader = () => {
  return (
    <div>
        <header className="fixed w-full flex justify-between items-center px-20 py-4 z-50 bg-black">
      <a href="#" className="text-white text-4xl font-bold">GYM</a>
      <nav className="flex space-x-10">
        <a href="#services" className="text-white hover:text-purple-500">Trainers</a>
        <a href="#projects" className="text-white hover:text-purple-500">Plans</a>
        <a href="#Contact" className="text-white hover:text-purple-500">Meals</a>
      </nav>
    </header>
    </div>
  )
}

export default CoachHeader