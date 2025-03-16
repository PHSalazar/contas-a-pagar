import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const toggleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      {pathname !== "/login" && (
        <>
          <Navbar showSidebar={toggleSidebar} />
          <Sidebar visible={visibleSidebar} closeSidebar={toggleSidebar} />
        </>
      )}

      <section className="p-3">
        <Outlet />
      </section>
    </>
  );
};
export default Layout;
