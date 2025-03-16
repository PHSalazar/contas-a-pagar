import { Check } from "lucide-react";
import LabelStatus from "./LabelStatus";

const TableBills = () => {
  const data = [
    {
      title: "Luz",
      dueDate: 6,
      amount: 1998.29,
      completed: false,
    },
    {
      title: "Água",
      dueDate: 10,
      amount: 120.5,
      completed: true,
    },
    {
      title: "Internet",
      dueDate: 15,
      amount: 89.99,
      completed: false,
    },
  ];

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
