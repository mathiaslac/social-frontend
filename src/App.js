import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import * as Layouts from "./layouts";

import { ModalProvider } from "./modules/modal";

import { NotFound, Profiles } from "./Pages/index";

const Landing = lazy(() => import("./Pages/Landing/Landing"));
const Donate = lazy(() => import("./Pages/Donate/Donate"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Servers = lazy(() => import("./Pages/Servers/Servers"));
const Events = lazy(() => import("./Pages/Events/Events"));
const Ladder = lazy(() => import("./Pages/Ladder/Ladder"));
const Leadboards = lazy(() => import("./Pages/Ladder/Leadboards"));
const Chats = lazy(() => import("./Pages/Chats/Chats"));

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Layouts.Core />}>
            <Route
              path=""
              element={
                <Suspense fallback={null}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="home"
              element={
                <Suspense fallback={null}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="donate"
              element={
                <Suspense fallback={null}>
                  <Donate />
                </Suspense>
              }
            />
            <Route
              path="chats"
              element={
                <Suspense fallback={null}>
                  <Chats />
                </Suspense>
              }
            />
            <Route
              path="servers"
              element={
                <Suspense fallback={null}>
                  <Servers />
                </Suspense>
              }
            />
            <Route
              path="leadboards"
              element={
                <Suspense fallback={null}>
                  <Leadboards />
                </Suspense>
              }
            />
            <Route
              path="ladder"
              element={
                <Suspense fallback={null}>
                  <Ladder />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={null}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="76561198184313278"
              element={
                <Suspense fallback={null}>
                  <Profiles />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={null}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
