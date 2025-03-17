import Sidebar from "../Sidebar";
import { Menu, User } from "lucide-react";
import Button from "../Button";
import { useState } from "react";

const Navbar = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const toggleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      <Sidebar visible={visibleSidebar} closeSidebar={toggleSidebar} />
      <div className="sticky top-0 bg-white h-10 w-full flex p-3 items-center justify-between z-10">
        <Button onClick={() => toggleSidebar()}>
          <Menu />
        </Button>

        <h3 className="text-sm">Contas a Pagar</h3>

        <Button>
          <User />
        </Button>
      </div>
    </>
  );
};
export default Navbar;
