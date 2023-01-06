import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h3>Layout</h3>

      <Outlet />
    </>
  );
};

export default Layout;
