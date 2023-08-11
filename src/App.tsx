import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";

import { Layout, PostDetail } from "./components";
import { logEvent, analytics } from "./firebase";
import { Home, Login, Post, Write, Edit, About, Tag, NotFound } from "./pages";
import { ProtectedRoute } from "./routes";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return (
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
  );
};

export default App;
