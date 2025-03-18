import { Check } from "lucide-react";
import LabelStatus from "./LabelStatus";

const TableBills = ({ data }) => {
  console.log(data);
  return (
    <table className="w-full text-sm font-light">
      <tr className="border-b-2 border-gray-400">
        <th className="font-semibold p-1.5 ">Conta</th>
        <th className="font-semibold">Venc.</th>
        <th className="font-semibold">Valor</th>
        <th className="font-semibold">Status</th>
        <th className="font-semibold">Ação</th>
      </tr>

      {data.map(({ title, dueDate, amount, completed }) => (
        <tr className="hover:bg-gray-100">
          <td className="pt-4 pb-4">{title}</td>
          <td className="p-2">Dia {dueDate}</td>
          <td className="p-2">R$ {amount}</td>
          <td className="p-2 text-center">
            <LabelStatus completed={completed} dueDate={dueDate} />
          </td>
          <td className="text-green-600 text-sm text-center">
            <button>
              <Check size={16} />
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};
export default TableBills;
