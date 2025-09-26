import { studentTranslations } from "../helper/studentTranslations";
import { useState } from "react";

export default function StudentLogin() {
  const [lang, setLang] = useState("en");
  const t = studentTranslations[lang];

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
            <p className="text-gray-600">{t.subtitle}</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="font-bold">{t.studentId}</label>
              <input
                type="text"
                placeholder={t.studentId}
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <div>
              <label className="font-bold">{t.studentPassword || "Password"}</label>
              <input
                type="password"
                placeholder={t.studentPassword || "Password"}
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <button className="w-full py-2 bg-[#352466] text-white font-bold rounded-lg hover:bg-purple-800 cursor-pointer ease-in-out transform transition-all duration-150">
              {t.studentLoginSubmit || "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
