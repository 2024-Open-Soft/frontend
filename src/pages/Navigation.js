import React, { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utility/RequireAuth";

const LazySignUp = lazy(() => import("./signup/SignUp"));

export const Navigation = () => {
  const dispatch = useDispatch();

  const navItems = [
    {
      path: "/signup",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazySignUp />
        </Suspense>
      ),
      protected: false,
    },
  ];

  React.useEffect(() => {
    fetchUserData(dispatch);
  }, [localStorage.getItem("userToken")]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {navItems
          .filter((ele) => !ele.protected)
          .map((ele, i) => (
            <Route key={i} element={ele.element} path={ele.path} />
          ))}
        <Route element={<RequireAuth />}>
          {navItems
            .filter((ele) => ele.protected)
            .map((ele, i) => (
              <Route key={i} element={ele.element} path={ele.path} />
            ))}
          <Route element={<HomeAccount />} path="/account">
            {accounts.map((ele, i) => (
              <Route key={i} element={ele.element} path={ele.path} />
            ))}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
