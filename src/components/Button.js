const Button = ({ className, children, onClick, style }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
