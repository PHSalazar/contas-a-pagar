const Card = ({ Icon, title, amount }) => {
  return (
    <div className="relative bg-white w-50 h-25 p-1.5 flex flex-col">
      <p className="absolute right-2 top-2 text-gray-400">
        {Icon && <Icon size={16} />}
      </p>
      <h6 className="text-xs text-gray-400">{title}</h6>
      <h1 className="flex-1 flex items-center justify-center">R$ {amount}</h1>
    </div>
  );
};

export default Card;
