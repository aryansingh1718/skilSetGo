import Landing from './components/Landing'
import StudentSignup from './components/StudentSignup'
import TeacherSignup from './components/TeacherSignup'
import StudentLogin from './components/StudentSignin'
import TeacherLogin from './components/TeacherSignin'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing></Landing>}></Route>
        <Route path = "/studentSignup" element = {<StudentSignup></StudentSignup>}></Route>
        <Route path = "/teacherSignup" element = {<TeacherSignup></TeacherSignup>}></Route>
        <Route path = "/teacherSignin" element = {<TeacherLogin></TeacherLogin>}></Route>
        <Route path = "/studentSignin" element = {<StudentLogin></StudentLogin>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
