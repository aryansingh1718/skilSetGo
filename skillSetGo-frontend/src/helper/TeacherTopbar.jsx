export default function TeacherTopbar(){
    return <div className="fixed top-0 left-0 w-full bg-[#f0f1f2] h-15 flex items-center">
        <div className="flex ml-4">
            <h1 className="text-[#352466] text-3xl font-bold">SkillsetGo</h1>
        </div>
        <div className="ml-100">
            <input type="text" placeholder="Search Student" className="border-2  border-gray-500 px-4 py-2 rounded-3xl w-80"></input>
        </div>
        <div className="ml-40 flex items-center gap-x-6">
            <button className="text-[#352466] text-xl font-medium py-2 px-4 mr-5 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800  ease-in-out transform transition-all duration-200">Answer Doubts</button>
            <button className="text-[#352466] text-xl font-medium py-2 px-4 mr-5 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800  ease-in-out transform transition-all duration-200">Add Student</button>

            <div className="cursor-pointer p-3 hover:bg-gray-300 active:bg-gray-400 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                </svg>
            </div>
            
        </div>
    </div>
}