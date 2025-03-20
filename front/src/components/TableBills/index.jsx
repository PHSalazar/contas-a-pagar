import { Check, X } from "lucide-react";
import useBills from "../../hooks/useBills";
import LabelStatus from "./LabelStatus";

const TableBills = () => {
  const { bills, handleDeleteBill, handleCompleteBill } = useBills();
  const data = bills || [];

  return (
    <table className="w-full text-sm font-light">
      <thead>
        <tr className="border-b-2 border-gray-400">
          <th className="font-semibold p-1.5 ">Conta</th>
          <th className="font-semibold">Venc.</th>
          <th className="font-semibold">Valor</th>
          <th className="font-semibold">Status</th>
          <th className="font-semibold">Ação</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, title, duedate, amount, completed }) => (
          <tr className="hover:bg-gray-100" key={id}>
            <td className="pt-4 pb-4">{title}</td>
            <td className="p-2">Dia {duedate}</td>
            <td className="p-2">R$ {amount}</td>
            <td className="p-2 text-center">
              <LabelStatus completed={completed} dueDate={duedate} />
            </td>
            <td className="text-sm text-center">
              <button
                className="text-green-600 cursor-pointer"
                onClick={() => handleCompleteBill(id)}
              >
                <Check size={16} />
              </button>
              <button
                className="ml-3 text-orange-600 cursor-pointer"
                onClick={() => handleDeleteBill(0, id)}
              >
                <X size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableBills;
