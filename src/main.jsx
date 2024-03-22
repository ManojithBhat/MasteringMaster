import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import Derivation from "./components/Derivation";
import Quiz from "./components/Quiz";
import Resource from "./components/Resource";
import "./index.css";

const router = createBrowserRouter([
  //put list of all the objects here
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "derivation",
        element: <Derivation />,
      },
      {
        path: "resource",
        element: <Resource />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
