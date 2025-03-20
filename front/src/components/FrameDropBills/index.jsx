import { useEffect, useState } from "react";
import LabelBill from "./LabelBill";
import {
  fetchBills,
  getPaidBills,
  getPendingBills,
} from "../../utils/billsHelpers";
import useBills from "../../hooks/useBills";

const FrameDropBills = () => {
  const { bills, handleToggleStatusBill } = useBills();
  const [notPaid, setNotPaid] = useState([]);
  const [paid, setPaid] = useState([]);

  useEffect(() => {
    const pedingBills = getPendingBills(bills);
    setNotPaid(pedingBills);

    const paidBills = getPaidBills(bills);
    setPaid(paidBills);
  }, [bills]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (list, setList, isPaid) => {
    if (draggedItem) {
      if (isPaid) {
        draggedItem.status = true;
      } else {
        draggedItem.status = false;
      }
      handleToggleStatusBill(draggedItem.id);

      setNotPaid((prev) => prev.filter((bill) => bill !== draggedItem));
      setPaid((prev) => prev.filter((bill) => bill !== draggedItem));

      setList((prev) => [...prev, draggedItem]);

      setDraggedItem(null);
    }
  };

  const handleClickToggleStatus = (setList, item) => {
    if (item.status) {
      item.status = false;
    } else {
      item.status = true;
    }

    setNotPaid((prev) => prev.filter((bill) => bill !== item));
    setPaid((prev) => prev.filter((bill) => bill !== item));
    setList((prev) => [...prev, item]);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 m-h-[100px]">
      <section className="flex flex-col">
        <h2 className="text-sm">Não pagas</h2>
        <section
          id="content"
          className="bg-gray-50 p-2 m-2 rounded-2xl flex flex-wrap gap-2 min-h-[100px] border-1 border-cherry"
          onDrop={() => handleDrop(notPaid, setNotPaid, false)}
          onDragOver={(e) => e.preventDefault()}
        >
          {notPaid.map((bill) => (
            <span
              key={bill.title}
              draggable
              onDragStart={() => handleDragStart(bill)}
              onClick={() => handleClickToggleStatus(setPaid, bill)}
              className="h-fit"
            >
              <LabelBill
                text={bill.title}
                status={bill.status}
                dueDate={bill.duedate}
              />
            </span>
          ))}
        </section>
      </section>

      <section
        className="flex flex-col"
        onDrop={() => handleDrop(paid, setPaid, true)}
        onDragOver={(e) => e.preventDefault()}
      >
        <h2 className="text-sm">Pagas</h2>
        <section
          id="content"
          className="bg-gray-50 p-2 m-2 rounded-2xl flex flex-wrap gap-1 min-h-[100px] border-1 border-green-mint"
        >
          {paid.map((bill) => (
            <span
              key={bill.title}
              draggable
              onDragStart={() => handleDragStart(bill)}
              onClick={() => handleClickToggleStatus(setNotPaid, bill)}
              className="h-fit"
            >
              <LabelBill
                text={bill.title}
                completed={bill.completed}
                dueDate={bill.duedate}
              />
            </span>
          ))}
        </section>
      </section>
    </section>
  );
};
export default FrameDropBills;
