export default function TeacherContent() {
  const students = [
    { id: 1, name: "ARYAN SINGH", class: "X - C" },
    { id: 2, name: "ABHINAV SHUKLA", class: "X - C" },
    { id: 3, name: "ROHAN MISHRA", class: "X - C" },
    { id: 4, name: "ARPITA GUPTA", class: "X - C" },
    { id: 5, name: "RIYA TIWARI", class: "X - C" },
    { id: 6, name: "SATYAKAM SAGAR", class: "X - C" },
  ];

  return (
    <div className="flex flex-col items-center mt-25">
      <h1 className="text-[#352466] text-6xl font-bold mb-10">
        Bridging the Digital Divide
      </h1>
      <h2 className="text-[#352466] w-140 text-xl text-center mb-10">
        Empowering rural schools in Nabha with modern digital education
        infrastructure and innovative learning solutions for the 21st century.
      </h2>

      {students.map((s, index) => (
        <div
          key={s.id}
          className={`bg-[#f0f1f2] w-full max-w-[1000px] h-[150px] flex items-center px-8 py-5 rounded-2xl 
          hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out 
          ${index === students.length - 1 ? "mb-40" : "mb-10"}`}
        >
          {/* Left fixed width for name + class */}
          <div className="flex flex-col justify-center w-[250px]">
            <h1 className="text-3xl font-semibold">{s.name}</h1>
            <h2 className="text-3xl font-semibold">{s.class}</h2>
          </div>

          {/* Right block with border-left */}
          <div className="flex items-center gap-x-4 border-l-2 pl-8 flex-1 h-full">
            <button className="text-[#352466] text-xl font-medium py-2 px-4 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800 transition-all duration-200">
              Answer Doubt
            </button>
            <button className="text-[#352466] text-xl font-medium py-2 px-4 rounded-3xl cursor-pointer hover:bg-[#352466] hover:text-[#f0f1f2] active:bg-purple-800 transition-all duration-200">
              See Progress
            </button>

            {/* Delete button */}
            <div className="cursor-pointer p-3 hover:bg-gray-300 active:bg-gray-400 rounded-2xl ml-auto flex items-center justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Footer outside the map */}
      <div className="fixed bottom-0 flex flex-col gap-y-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div className="bg-[#f0f1f2] px-12 py-8 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-3xl font-semibold">
            TOTAL STUDENTS - {students.length}
          </h1>
        </div>
      </div>
    </div>
  );
}
