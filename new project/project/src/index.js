import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Catalog from "./page/Catalog";
import CartPage from "./page/CartPage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/shopcart" element={<CartPage />} />
    </>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
