import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import SearchCom from "../components/SearchCom";
import Body from "../components/Body";
import App from "../App";
import RestauMenuPage from "../components/RestauMenupage'/RestauMenuPage";
import ItemTypeRestaurant from "../components/ItemTypeRestaurant/ItemTypeRestaurant";
//import LocationCom from "../components/LocationCom";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "",
          element: < Body/>
          },
          {
            path: "search",
            element: <SearchCom/>
          },
          {
            path: "*",
            element: <App/>
          },
          {
            path: "/restaurants/:resId",
            element: <RestauMenuPage/>
          },
          {
            path:"/food/collection/id=/:foodId/restaurants",
            element: <ItemTypeRestaurant/>
         },
        ]
      },
]);