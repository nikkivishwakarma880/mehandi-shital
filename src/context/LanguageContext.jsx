import React, { createContext, useContext, useState } from "react";
import languageData from "../data/languageData";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "EN" : "EN"));
  };

  const t = languageData[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};