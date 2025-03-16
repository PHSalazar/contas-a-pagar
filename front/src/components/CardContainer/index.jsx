const CardContainer = ({ Icon, title, children }) => {
  return (
    <div className="relative bg-white p-1.5 flex flex-col mt-3 mb-3">
      <p className="absolute right-2 top-2 text-gray-400">
        {Icon && <Icon size={16} />}
      </p>
      <h6 className="text-xs text-gray-400">{title}</h6>

      <div>{children}</div>
    </div>
  );
};

export default CardContainer;
