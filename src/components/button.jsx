const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 px-10 h-12 text-white rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
