const LabelBill = ({ text, status }) => {
  const bgStatus = status == true ? "bg-green-mint" : "bg-gray-200";
  return (
    <span
      className={`relative p-1.5 rounded-full text-xs cursor-grab ${bgStatus}`}
    >
      {text}
    </span>
  );
};
export default LabelBill;
