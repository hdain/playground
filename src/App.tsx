import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import { Layout, PostDetail } from "./components";
import { Home, Login, Post, Write, Edit, About } from "./pages";
import { ProtectedRoute } from "./routes";

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
