import { useState } from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 py-2 flex items-center">
      <p className="mb-0 mr-2 text-lg">Language:</p> {/* Changed mb-2 to mb-0 and added margin */}
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          {language}
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
            {languages.map(([lang, version]) => (
              <div
                key={lang}
                className={`px-4 py-2 text-gray-200 ${
                  lang === language ? ACTIVE_COLOR : ""
                } ${lang === language ? "bg-gray-800" : "bg-transparent"} hover:${ACTIVE_COLOR} hover:bg-gray-800`}
                onClick={() => {
                  onSelect(lang);
                  setIsOpen(false); // Close dropdown after selecting a language
                }}
              >
                {lang}
                <span className="text-gray-600 text-sm ml-2">({version})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default LanguageSelector;
