import React, { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Error from "./components/Error";
import { fetchUserData } from "./components/fetchUser";

const LazySignUp = lazy(() => import("./pages/SignUp"));
const LazyLogin = lazy(() => import("./pages/Login"));
const LazyHome = lazy(() => import("./pages/LandingPage"));
const LazyMovie = lazy(() => import("./pages/MoviePage"));
const LazySearch = lazy(() => import("./pages/SearchPage"));
const LazySubscriptions = lazy(() => import("./pages/SubscriptionPage"));
const LazyUser = lazy(() => import("./pages/UserInfo"));
const LazyWatchlist = lazy(() => import("./pages/WatchList"));

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
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazyLogin />
        </Suspense>
      ),
      protected: false,
      errorElement: <Error />,
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazyHome />
        </Suspense>
      ),
      protected: false,
      errorElement: <Error />,
    },
    {
      path: "/movie/:id",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazyMovie />
        </Suspense>
      ),
      protected: false,
      errorElement: <Error />,
    },
    {
      path: "/search",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazySearch />
        </Suspense>
      ),
      protected: false,
      errorElement: <Error />,
    },
    {
      path: "/subscriptions",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazySubscriptions />
        </Suspense>
      ),
      protected: true,
      errorElement: <Error />,
    },
    {
      path: "/profile",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazyUser />
        </Suspense>
      ),
      protected: true,
      errorElement: <Error />,
    },
    {
      path: "/watchlist",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <LazyWatchlist />
        </Suspense>
      ),
      protected: true,
      errorElement: <Error />,
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
