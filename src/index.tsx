import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScheduleContextProvider } from "./context/ScheduleContext";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/reset.css";

import themes, { GlobalStyle } from "themes";

import Scheduling from "./pages/Scheduling/Scheduling";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Scheduling />,
  },
]);

root.render(
  <React.StrictMode>
    <ScheduleContextProvider>
      <ThemeProvider theme={themes.main}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ScheduleContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
