import { createContext, useContext, useState} from "react";

export const AppContext = createContext({
    cities: [],
    apiData: [],
    cuisines: [],
    restaurants: [],
    location: {latitude: 23.831457, longitude: 91.2867777}
});

export const AppProvider = (props) => {
    const homeContext = useContext(AppContext);
    const [apiData, setApiData] = useState(homeContext?.apiData);
    const [cities, setCities] = useState(homeContext?.cities);
    const [showLocation, setShowLocation] = useState(false);
    const [location, setLocation] = useState(homeContext?.location);
    const [cuisines, setCuisines] = useState(homeContext.cuisines);
    const [restaurants, setRestaurants] = useState(homeContext.restaurants);

    return (
        <AppContext.Provider
            value={{
                cities,
                setCities,
                apiData,
                setApiData,
                showLocation,
                setShowLocation,
                location,
                setLocation,
                cuisines,
                setCuisines,
                restaurants,
                setRestaurants
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};