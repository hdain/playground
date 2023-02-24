import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";
import { Write } from "./pages/Write";
import { Layout } from "./components/Layout";
import { PostDetail } from "./components/PostDetail";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="post" element={<Post />} />
        <Route path="post/:postId" element={<PostDetail />} />
        <Route
          path="write"
          element={
            <ProtectedRoute>
              <Write />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
