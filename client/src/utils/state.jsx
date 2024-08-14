import { createContext, useState, useContext } from "react";


export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const StateProvider = (props) => {
    const [searchResult, setSearchResult] = useState({});

    return (
        <GlobalContext.Provider value={{ searchResult, setSearchResult, test:"hello" }} >
            {props.children}
        </GlobalContext.Provider>

    );

};
