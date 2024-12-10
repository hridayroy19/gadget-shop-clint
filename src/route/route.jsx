import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);
  