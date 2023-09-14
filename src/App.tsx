import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";

import { Layout } from "./components";
import { logEvent, analytics } from "./firebase";
import { ProtectedRoute } from "./routes";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Post = lazy(() => import("./pages/Post"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const Write = lazy(() => import("./pages/Write"));
const Edit = lazy(() => import("./pages/Edit"));
const About = lazy(() => import("./pages/About"));
const Tag = lazy(() => import("./pages/Tag"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Post />} />
          <Route path="post/:slug" element={<PostDetail />} />
          <Route path="tag/:slug" element={<Tag />} />
          <Route
            path="write"
            element={
              <ProtectedRoute>
                <Write />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:timestamp"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
