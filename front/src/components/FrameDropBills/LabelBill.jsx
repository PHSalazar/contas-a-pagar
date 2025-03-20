const LabelBill = ({ text, completed, dueDate }) => {
  let bgStatus;

  if (completed === true) {
    bgStatus = "bg-green-mint";
  } else if (parseInt(dueDate) < new Date().getDate()) {
    bgStatus = "bg-cherry";
  } else if (parseInt(dueDate) > new Date().getDate()) {
    bgStatus = "bg-sky text-white";
  }

  return (
    <span
      className={`relative p-1.5 rounded-full text-xs cursor-grab font-semibold ${bgStatus}`}
    >
      {text}
    </span>
  );
};
export default LabelBill;
