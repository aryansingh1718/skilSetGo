import { teacherTranslations } from "../helper/teacherTranslations";
import { useState } from "react";

export default function TeacherSignup() {
  const [lang, setLang] = useState("en");
  const t = teacherTranslations[lang];

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center bg-[#352466]/100">
        <div className="bg-[#f0f1f2] shadow-md rounded-2xl p-6 max-w-md w-full">

          <div className="flex justify-end mb-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border p-2 rounded-md font-bold"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
            </select>
          </div>

          <div className="text-center mb-6">
            <div className="text-4xl">📚</div>
            <h1 className="text-2xl font-bold text-gray-800">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle || ""}</p>
          </div>

          <form className="space-y-4">

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-bold">{t.teacherFirst}</label>
                <input
                  type="text"
                  placeholder={t.teacherFirst}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label className="font-bold">{t.teacherLast}</label>
                <input
                  type="text"
                  placeholder={t.teacherLast}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="font-bold">{t.staffSchool}</label>
              <select className="w-full border p-2 rounded-lg">
                <option>--Select--</option>
                <option>Nabha Primary School</option>
                <option>Nabha Middle School</option>
                <option>Nabha High School</option>
              </select>
            </div>

            <div>
              <label className="font-bold">{t.staffClass}</label>
              <select className="w-full border p-2 rounded-lg">
                <option>--Select--</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
            </div>

            <div>
              <label className="font-bold">{t.staffSection}</label>
              <select className="w-full border p-2 rounded-lg">
                <option>--Select--</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div>
              <label className="font-bold">{t.staffID}</label>
              <input
                type="text"
                placeholder={t.staffID}
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <div>
              <label className="font-bold">{t.teacherPassword || "Set Password"}</label>
              <input
                type="password"
                placeholder={t.teacherPassword || "Set Password"}
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <button className="w-full py-2 bg-[#352466] text-white font-bold rounded-lg hover:bg-purple-800 cursor-pointer ease-in-out transform transition-all duration-150">
              {t.teacherSubmit}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
