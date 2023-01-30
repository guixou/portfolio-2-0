import React, {createContext, useState, useEffect} from "react";
 
export const DataLanguage = createContext();

    // charger/utiliser mon Json
  
const DataLanguageProvider = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch('data.json');
        const json = await response.json();
        setData(json);
        }
        fetchData();
    }, []);

    return (
        <DataLanguage.Provider value={{data}}>
            {props.children}
        </DataLanguage.Provider>
    )
}

export default DataLanguageProvider
