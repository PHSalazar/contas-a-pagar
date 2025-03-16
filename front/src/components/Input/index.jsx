const Input = ({ Icon, ...props }) => {
  return (
    <div className="p-3 border-b-gray-600 border-b-1  flex flex-nowrap items-center gap-2">
      {Icon && <Icon size={16} />}
      <input {...props} className="flex-1 outline-none" />
    </div>
  );
};
export default Input;
