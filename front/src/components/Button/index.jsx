const Button = ({ children, ...props }) => {
  return (
    <button
      className="cursor-pointer p-2 hover:bg-gray-200 rounded-full"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
