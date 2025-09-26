import { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function CenterPart(){
    const [signinTrue,setSigninTrue] = useState(false);
    const navigate = useNavigate();
    return <div className="flex flex-col items-center py-20">
        <h1 className="text-[#352466] text-6xl font-bold mb-10">Bridging the Digital Divide</h1>
        <h2 className="text-[#352466] w-140 text-xl text-center mb-10">Empowering rural schools in Nabha with modern digital education infrastructure and innovative learning solutions for the 21st century.</h2>
        {signinTrue ? <div className="flex gap-x-5 mb-5">
            <button className="text-white bg-white px-4 py-3 "
            onClick={() => {
                navigate("/teacherSignup")
            }}>Signup as a Teacher</button>
            <button className="text-white bg-white px-4 py-3 "
             onClick={() => {
                navigate("/studentSignup")
            }}>Signup as a Student</button>
        </div> :<div className="flex gap-x-5 mb-5">
            <button className="text-white bg-[#352466] px-4 py-3 rounded-full font-medium hover:bg-[#f0f1f2] hover:text-[#352466] shadow-lg transition-all duration-200 active:bg-gray-300 cursor-pointer"
            onClick={() => {
                navigate("/teacherSignup")
            }}>Signup as a Teacher</button>
            <button className="text-white bg-[#352466] px-4 py-3 rounded-full font-medium hover:bg-[#f0f1f2] hover:text-[#352466] shadow-lg transition-all duration-200 active:bg-gray-300 cursor-pointer"
             onClick={() => {
                navigate("/studentSignup")
            }}>Signup as a Student</button>
        </div>}
        {signinTrue ? <h1 className="mb-5">New to the app? <span className="text-[#352466] font-medium hover:underline cursor-pointer"
        onClick={() => {
            setSigninTrue(!signinTrue)
        }}>Sign up</span></h1>:<h1 className="mb-5">Already a user? <span className="text-[#352466] font-medium hover:underline cursor-pointer"
        onClick={() => {
            setSigninTrue(!signinTrue)  
        }}>Sign in</span></h1>}
        
        {signinTrue ? <div className="flex gap-x-5 mb-5">
            <button className="text-white bg-[#352466] px-4 py-3 rounded-full font-medium hover:bg-[#f0f1f2] hover:text-[#352466] shadow-lg transition-all duration-200 active:bg-gray-300 cursor-pointer"
            onClick={() => {
                navigate("/teacherSignin")
            }}>Signin as a Teacher</button>
            <button className="text-white bg-[#352466] px-4 py-3 rounded-full font-medium hover:bg-[#f0f1f2] hover:text-[#352466] shadow-lg transition-all duration-200 active:bg-gray-300 cursor-pointer"
             onClick={() => {
                navigate("/studentSignin")
            }}>Signin as a Student</button>
        </div>:null}
    </div>
}