import React, { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import Error from "../components/Error";
import { fetchUserData } from "../components/fetchUser";
import LandingPage from "./LandingPage";
import Home from "./Home";

const LazySignUp = lazy(() => import("./SignUp"));
const LazyLogin = lazy(() => import("./Login"));
// const LazyHome = lazy(() => import("./LandingPage"));
const LazyMovie = lazy(() => import("./MoviePage"));
const LazySearch = lazy(() => import("./SearchPage"));
const LazySubscriptions = lazy(() => import("./SubscriptionPage"));
const LazyUser = lazy(() => import("./UserInfo"));
const LazyWatchlist = lazy(() => import("./WatchList"));
const Navigation = () => {
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
      isBgVideo: true,
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
      isBgVideo: true,
    },
    {
      path: "/",
      element: <LandingPage />,
      protected: false,
      errorElement: <Error />,
      isBgVideo: true,
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
      isBgVideo: true,
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
      isBgVideo: false,
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
      isBgVideo: true,
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
      isBgVideo: true,
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
      isBgVideo: false,
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
        </Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
