import { Menu, User } from "lucide-react";
import Button from "../Button";

const Navbar = ({ showSidebar }) => {
  return (
    <div className="sticky top-0 bg-white h-10 w-full flex p-3 items-center justify-between z-10">
      <Button onClick={() => showSidebar()}>
        <Menu />
      </Button>

      <h3 className="text-sm">Contas a Pagar</h3>

      <Button>
        <User />
      </Button>
    </div>
  );
};
export default Navbar;
