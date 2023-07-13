import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/reset.css";

import themes, { GlobalStyle } from "themes";

import Scheduling from "./pages/Scheduling/Scheduling";
import SpeakerPage from "components/SpeakerPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Scheduling />,
  },
  {
    path: "/speaker/linus-torvalds",
    element: (
      <SpeakerPage
        slug="linus-torvalds"
        name="Linus Torvalds"
        bio="Linus Benedict Torvalds is a Finnish software engineer who is the creator and, historically, the lead developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git."
        pictureUrl="https://wiki.inf.ufpr.br/computacao/lib/exe/fetch.php?w=400&tok=4a001d&media=https%3A%2F%2Fcdn.linuxfordevices.com%2Fwp-content%2Fuploads%2F2022%2F07%2Flinus-Torvalds.jpg"
        talk={{
          title: "Why Linux is the best operating system for programming",
          description:
            "In this captivating talk, we delve into the undeniable supremacy of Linux as the premier operating system for programming. As the open-source powerhouse that has revolutionized the digital landscape, Linux offers unparalleled advantages that have made it the preferred choice for developers worldwide.",
          stage: "Palco Morro do Careca",
          time: "10h30",
          type: "Machine Learning",
        }}
      />
    ),
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.main}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
