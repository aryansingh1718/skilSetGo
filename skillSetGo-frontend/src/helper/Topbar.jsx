import { Link } from "react-scroll";
export default function Topbar(){
    return <div className="fixed top-0 left-0 w-full bg-[#f0f1f2] h-15 flex items-center">
        <div className="flex ml-4">
            <h1 className="text-[#352466] text-3xl font-bold">SkillsetGo</h1>
        </div>
        <div className="ml-190">
            <Link to="Problem" smooth = {true} duration={500} offset={-50} className="text-[#352466] text-xl font-medium py-2 px-4 mr-5 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800  ease-in-out transform transition-all duration-200">Problem</Link>
            <Link to="Impact" smooth = {true} duration={500} offset={-100} className="text-[#352466] text-xl font-medium  py-2 px-4 mr-5 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800  ease-in-out transform transition-all duration-200">Impact</Link>
            <Link to="Solution" smooth = {true} duration={500} offset={-50} className="text-[#352466] text-xl font-medium  py-2 px-4 mr-5 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800  ease-in-out transform transition-all duration-200">Solutions</Link>
            <Link to="Stakeholders" smooth = {true} duration={500} offset={-100} className="text-[#352466] text-xl font-medium  py-2 px-4 mr-5 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800  ease-in-out transform transition-all duration-200">Stakeholders</Link>
        </div>
    </div>
}