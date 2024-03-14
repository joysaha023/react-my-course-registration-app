import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Courses from './components/courses/Courses'
import './App.css'

function App() {
  

 

  return (
    <>
     <div className='p-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>Course Registration</h1>
        <Courses></Courses>

     </div>
    
      
    </>
  )
}

export default App
