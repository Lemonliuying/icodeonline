import React from "react";
import ReactDOM from "react";
import "./App.css";

import { Navbar, CTA } from "./components";
import { Features, Selects, Footer, Tabs } from "./containers";
import Header from "./containers/header/Header";

import { BrowserRouter as Router } from "react-router-dom"; // 导入 BrowserRouter
import Login from "./components/login/Login.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const Root = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Features />
      <CTA />
      <Selects />
      <Tabs />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
