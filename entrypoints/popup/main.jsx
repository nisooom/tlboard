import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./style.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);
//   {
//     path: "/write",
//     element: <WritePage />,
//   },
//   {
//     path: "/recorded",
//     element: <RecordedPage />,
//   },
//   {
//     path: "/read/:date?",
//     element: <ReadPageWrapper />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
