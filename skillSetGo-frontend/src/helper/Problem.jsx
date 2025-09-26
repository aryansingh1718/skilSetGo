export default function Problem(){
    return <div id = "Problem" className="flex flex-col items-center py-10 mb-10">
        <h1 className="text-[#352466] text-5xl font-bold mb-12">The Challenge We Face</h1>
        <div className="flex flex-row flex-wrap ml-30 gap-x-10 gap-y-10">
            <div className="group flex flex-col items-center bg-[#f0f1f2] pt-8 pb-10 px-8 rounded-3xl shadow-lg border-l-5 border-[#352466] hover:bg-[#352466] hover:text-white transition-all duration-300">
                <h1 className="text-[#352466] text-2xl font-bold mb-8 group-hover:text-white">Outdated Infrastructure</h1>
                <h2 className="w-80">Schools in Nabha lack updated computer systems and stable internet connectivity, leaving students behind in the digital age.</h2>
            </div>
            <div className="group flex flex-col items-center bg-[#f0f1f2] pt-8 pb-10 px-8 rounded-3xl shadow-lg border-l-5 border-[#352466] hover:bg-[#352466] hover:text-white transition-all duration-300">
                <h1 className="text-[#352466] text-2xl font-bold mb-8 group-hover:text-white"> Teacher Struggles</h1>
                <h2 className="w-80">Educators work with obsolete technology, limiting their ability to deliver modern, engaging educational experiences.</h2>
            </div>
            <div className="group flex flex-col items-center bg-[#f0f1f2] pt-8 pb-10 px-8 rounded-3xl shadow-lg border-l-5 border-[#352466] hover:bg-[#352466] hover:text-white transition-all duration-300">
                <h1 className="text-[#352466] text-2xl font-bold mb-8 group-hover:text-white"> Limited Digital Content</h1>
                <h2 className="w-80">Students have no access to digital educational resources, creating a significant learning gap compared to urban areas.</h2>
            </div>
            <div className="group flex flex-col items-center bg-[#f0f1f2] pt-8 pb-10 px-8 rounded-3xl shadow-lg border-l-5 border-[#352466] hover:bg-[#352466] hover:text-white transition-all duration-300">
                <h1 className="text-[#352466] text-2xl font-bold mb-8 group-hover:text-white"> Skills Gap</h1>
                <h2 className="w-80">Without digital literacy, rural students face reduced employability and competitiveness in higher education and careers.</h2>
            </div>
        </div>
    </div>
}