import { BillsProvider } from "../contexts/BillsContext";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <BillsProvider>
      <Outlet />
    </BillsProvider>
  );
};
export default Layout;
