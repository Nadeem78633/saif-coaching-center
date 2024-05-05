import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/Css/app.css";
import { DashboardLayout, Error, Home, } from "./Pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/", element: <Home /> },
      // { path: "link", element: <Projects /> },
   
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
