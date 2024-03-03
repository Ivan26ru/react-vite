const Button = ({children, type}) => {
	return (
		<button style={type}>{children}</button>
	);
};

export default Button;
