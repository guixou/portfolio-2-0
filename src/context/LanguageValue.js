import React, {createContext, useState, useEffect} from "react";

export const LanguageValue = createContext();

const LanguageValueProvider = (props) => {

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'Français');

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language])

    const toggleLanguage = () => {
        setLanguage( language === "Français" ? "English" : "Français")

    }

    return (
        <LanguageValue.Provider value={{language, toggleLanguage}}>
            {props.children}
        </LanguageValue.Provider>
    )

}

export default LanguageValueProvider;