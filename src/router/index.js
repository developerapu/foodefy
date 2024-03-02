import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import SearchCom from "../components/SearchCom";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchCom/>
      },
      {
        path: "*",
        element: <HomePage />,
      },
]);