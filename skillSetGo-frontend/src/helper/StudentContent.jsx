import { useState } from "react";

export default function StudentContent() {

  const [modules, setModules] = useState([
    { id: 1, title: "1. BASICS OF COMPUTER", topics: "x/10", quizzes: "x/10", like: false },
    { id: 2, title: "2. OPERATING SYSTEM", topics: "x/12", quizzes: "x/8", like: false },
    { id: 3, title: "3. NETWORKING", topics: "x/15", quizzes: "x/12", like: false },
  ]);

  const toggleLike = (id) => {
    setModules((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, like: !m.like } : m
      )
    );
  };

  return (
    <div className="flex flex-col items-center mt-25">
      <h1 className="text-[#352466] font-sans text-4xl">MODULES</h1>

      {modules.map((m) => (
        <div
          key={m.id}
          className="bg-[#f0f1f2] mx-20 mb-10 mt-8 flex gap-x-50 px-15 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h1 className="text-3xl font-semibold">{m.title}</h1>

          <div className="flex items-center gap-x-8 border-l-2 pl-8">
            <div className="flex flex-col gap-y-3">
              <h1>TOPICS COMPLETED - {m.topics}</h1>
              <h2>QUIZZES COMPLETED - {m.quizzes}</h2>
            </div>

            <input type="checkbox" className="w-5 h-5 cursor-pointer" />

            {m.like ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="none"
                className="size-7 cursor-pointer fill-red-600"
                onClick={() => toggleLike(m.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-7 cursor-pointer"
                onClick={() => toggleLike(m.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
      <div className="fixed bottom-0 flex flex-col gap-y-5 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <div className="bg-[#f0f1f2] px-12 py-8">
            <h1 className="text-3xl font-semibold">TOTAL MODULES COMPLETED - 2/5</h1>
        </div>
      </div>
      
    </div>
    
  );
}
