import { House, Receipt, Sheet, X } from "lucide-react";

const Sidebar = ({ visible, closeSidebar }) => {
  return (
    <section
      className={`fixed top-0 left-0 z-20 w-[300px] h-full p-4 bg-gray-800 text-white text-sm 
      ${visible ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 ease-in-out`}
    >
      <button
        id="closeSidebar"
        className="absolute right-4"
        onClick={() => closeSidebar()}
      >
        <X size={16} />
      </button>
      <section
        id="header-sidebar"
        className="w-full border-b-white border-b-1 pb-2"
      >
        <h1 className="text-xl">Visitante</h1>
        <span className="text-xs">9 contas cadastradas</span>
      </section>

      <ul className="pt-20">
        <li className="py-4">
          <a href="#" className="flex items-center">
            {" "}
            <House className="mr-2" size={16} /> Início
          </a>
        </li>
        <li className="py-4">
          <a href="#" className="flex items-center">
            {" "}
            <Receipt className="mr-2" size={16} /> Contas
          </a>
        </li>
        <li className="py-4">
          <a href="#" className="flex items-center">
            <Sheet className="mr-2" size={16} /> Relatórios
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Sidebar;
