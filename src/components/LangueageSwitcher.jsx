import { useEffect, useState } from "react";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang);  // Actualizamos el estado cuando el idioma cambia
  };

  useEffect(() => {
    // Si i18next ya tiene un idioma inicial, lo ponemos en el estado
    setCurrentLanguage(i18next.language);
  }, []);

  return (
    <div className="flex flex-row justify-center select-none">
      <div className="flex flex-row items-center right-1 rounded-xl border border-neutral-800">
        <button
          className={`p-2 flex flex-row items-center rounded-l-xl text-sm font-medium text-gray-700 hover:bg-purple-950 focus:bg-purple-950 focus:outline-none ${currentLanguage === 'en' ? 'bg-purple-950 text-white' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          <span className="text-md text-neutral-300">En</span>
          <span className="ml-1">
            <img
              src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
              className="w-5 h-5"
              alt="English flag"
            />
          </span>
        </button>

        <button
          className={`p-2 flex flex-row items-center rounded-r-xl text-sm font-medium text-gray-700 hover:bg-purple-950 focus:bg-purple-950 focus:outline-none ${currentLanguage === 'es' ? 'bg-purple-950 text-white' : ''}`}
          onClick={() => changeLanguage('es')}
        >
          <span className="text-md text-neutral-300">Es</span>
          <span className="ml-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
              className="w-5 h-5"
              alt="Spanish flag"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
