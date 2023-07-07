import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";

import { Layout, PostDetail } from "./components";
import { Home, Login, Post, Write, Edit, About } from "./pages";
import { ProtectedRoute } from "./routes";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const defaultTitle = process.env.REACT_APP_TITLE as string;
    const postTitle = "Post | " + process.env.REACT_APP_TITLE;

    document.title = pathname === "/post" ? postTitle : defaultTitle;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="post" element={<Post />} />
        <Route path="post/:slug" element={<PostDetail />} />
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
      </Route>
    </Routes>
  );
};

export default App;
