// src/data/routes.ts
import React from "react";
import Home from "../pages/home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Favorites from "../pages/Favorites";
export interface RouteItem {
  path: string;
  label: string;
  element: React.ReactNode;
  isVisible?: boolean;
}
export const routes = [
  { path: "/list", label: "خانه ", element: <Home />, isVisible: true },
  { path: "/about", label: "درباره ما ", element: <About />, isVisible: true },
  {
    path: "/contact",
    label: "تماس با ما",
    element: <Contact />,
    isVisible: true,
  },
  {
    path: "/favorites",
    label: "علاقه‌مندی ها ",
    element: <Favorites />,
    isVisible: false,
  },
];
