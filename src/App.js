import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Puff } from "react-loader-spinner";
import "./App.css";
import useLocalStorage from "./common/hooks/use-localstorage";
import { check } from "./common/http/userAPI";

import * as Layouts from "./layouts";

import { ModalProvider } from "./modules/modal";

import { NotFound, Profiles } from "./Pages/index";

import {
  TopAwp,
  TopComp,
  TopDm,
  TopHns,
  TopRetake,
} from "./Pages/Ladder/components/Tops";
import { Context } from ".";
import LeaderBoardLayout from "./Pages/Ladder/Ladder";
import { allRoutes, authRoutes, loginRoute } from "./routes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context);
  const [jwt, setJwt] = useLocalStorage("jwtToken");

  useEffect(() => {
    if( typeof jwt === "undefined" )
      return setLoading(false);

    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        user.setGroup(data.group);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.message);
        setJwt(undefined);
      })
      .finally(() => setLoading(false));
  }, [user, setJwt, jwt]);

  if (loading) {
    return (
      <div className="loader_screen">
        <Puff color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <ModalProvider>
        <ToastContainer
            theme="dark"
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Layouts.Core />}>
			      {user.isAuth && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
            {!user.isAuth && loginRoute.map(({path, Component}) => (
                <Route key={path} path={path} element={
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
            {allRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  }
                />
            ))}
            <Route path="*" element={<NotFound />} />
            <Route path="leaderboard" element={<LeaderBoardLayout />}>
              <Route
                path="awp"
                element={
                  <Suspense fallback={null}>
                    <TopAwp />
                  </Suspense>
                }
              />
              <Route
                path="dm"
                element={
                  <Suspense fallback={null}>
                    <TopDm />
                  </Suspense>
                }
              />
              <Route
                path="hns"
                element={
                  <Suspense fallback={null}>
                    <TopHns />
                  </Suspense>
                }
              />
              <Route
                path="retake"
                element={
                  <Suspense fallback={null}>
                    <TopRetake />
                  </Suspense>
                }
              />
              <Route
                path="comp"
                element={
                  <Suspense fallback={null}>
                    <TopComp />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
