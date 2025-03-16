const LabelStatus = ({ completed, dueDate }) => {
  const checkLegend = () => {
    if (completed === true) {
      return "Pago";
    } else if (parseInt(dueDate) < new Date().getDate()) {
      return "Vencida";
    } else if (parseInt(dueDate) > new Date().getDate()) {
      return "Pendente";
    }
  };

  const bgLegend =
    checkLegend() === "Vencida"
      ? "bg-cherry"
      : checkLegend() === "Pago"
      ? "bg-green-mint"
      : "bg-sky";

  return (
    <span className={`${bgLegend} p-0.5 px-2 text-xs rounded-full font-light`}>
      {checkLegend()}
    </span>
  );
};
export default LabelStatus;
