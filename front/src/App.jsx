import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const toggleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      {/* <Navbar showSidebar={toggleSidebar} />
      <Sidebar visible={visibleSidebar} closeSidebar={toggleSidebar} />
      <section className="p-3">
        <Home />
      </section> */}

      <Login />
    </>
  );
}

export default App;
