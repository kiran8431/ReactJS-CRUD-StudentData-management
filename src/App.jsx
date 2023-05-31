import React from 'react'
import Student from './Student/Student'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import StudentProfile from './Student/StudentProfile'
import StudentData from './Student/StudentData'
import Editdetails from './Student/Editdetails'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Student/>
        <Routes>
            <Route path='/stcreate' element={<StudentProfile/>} />
            <Route path='/stdetails' element={<StudentData/>} /> 
            <Route path='/editdetails/:index' element={<Editdetails/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App