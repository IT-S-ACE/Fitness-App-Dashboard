import React from 'react'

const CoachFooter = () => {
  return (
    <footer className="relative w-full h-20 flex items-end bg-gradient-to-b from-[#1e152e] to-[#161616] text-[#d6dfed] font-sans">
      <p className="text-lg font-semibold mb-4 ml-20">Copyrights @ <span className="text-blue-600">Portogas D Ace</span></p>
      <div className="flex space-x-4">
        <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
        <a href="#"><i className="fab fa-twitter text-xl"></i></a>
        <a href="#"><i className="fab fa-instagram text-xl"></i></a>
        <a href="#"><i className="fab fa-facebook text-xl"></i></a>
      </div>
    </footer>
  )
}

export default CoachFooter