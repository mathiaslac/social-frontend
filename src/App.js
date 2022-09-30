import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Puff } from "react-loader-spinner";
import "./App.css";
import useLocalStorage from "./common/hooks/use-localstorage";
import { SkeletonTheme } from "react-loading-skeleton";
import { check } from "./common/http/userAPI";

import * as Layouts from "./layouts";
import * as Dashboard from "./Pages/Dashboard";

import { ModalProvider } from "./modules/modal";

import { NotFound } from "./Pages/index";

import { Context } from ".";
import LeaderBoardLayout from "./Pages/Ladder/Ladder";
import {
  allRoutes,
  authRoutes,
  loginRoute,
  g_1Routes,
  g_2Routes,
  g_3Routes,
  g_4Routes,
  tops_Routes,
} from "./routes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context);
  const [jwt, setJwt] = useLocalStorage("jwtToken");

  useEffect(() => {
    if (typeof jwt === "undefined") return setLoading(false);

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
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
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
              <Route path="/leadboards" element={<LeaderBoardLayout />}>
                {tops_Routes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <Suspense fallback={null}>
                        <Component />
                      </Suspense>
                    }
                  />
                ))}
              </Route>
              <Route path="/dashboard" element={<Dashboard.Core />}>
                {user.isAuth &&
                  user.user.group === 1 &&
                  g_1Routes.map(({ path, Component }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <Suspense fallback={null}>
                          <Component />
                        </Suspense>
                      }
                    />
                  ))}
                {user.isAuth &&
                  user.user.group === 2 &&
                  g_2Routes.map(({ path, Component }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <Suspense fallback={null}>
                          <Component />
                        </Suspense>
                      }
                    />
                  ))}
                {user.isAuth &&
                  user.user.group === 3 &&
                  g_3Routes.map(({ path, Component }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <Suspense fallback={null}>
                          <Component />
                        </Suspense>
                      }
                    />
                  ))}
                {user.isAuth &&
                  user.user.group === 4 &&
                  g_4Routes.map(({ path, Component }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <Suspense fallback={null}>
                          <Component />
                        </Suspense>
                      }
                    />
                  ))}
              </Route>
              {user.isAuth &&
                authRoutes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <Suspense fallback={null}>
                        <Component />
                      </Suspense>
                    }
                  />
                ))}
              {!user.isAuth &&
                loginRoute.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <Suspense fallback={null}>
                        <Component />
                      </Suspense>
                    }
                  />
                ))}
              {allRoutes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  }
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;
