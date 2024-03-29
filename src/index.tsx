import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/worker";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

if (process.env.NODE_ENV === "development") {
  worker.start();
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement:<NotFound ></NotFound>,
    children: [
      { index: true, path: "/", element: <Home></Home> },
      // { path: "/view/:url", element: <View /> },
      // { path: "/input", element: <Form /> },
    ],
  },
]);





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
