import { createContext, useContext, useState} from "react";

export const AppContext = createContext({
    cities: [],
    apiData: []
});

export const AppProvider = (props) => {
    const homeContext = useContext(AppContext);
    const [apiData, setApiData] = useState([]);
    const [cities, setCities] = useState([]);

    return (
        <AppContext.Provider
            value={{
                cities,
                setCities,
                apiData,
                setApiData
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};