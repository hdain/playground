import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import { AuthContext } from "./contexts/authContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";

const App = () => {
  const user = useContext(AuthContext);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
