export const increment = () => {
	return {
		type: "INCREMENT",
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};

export const incrementBy5 = (num) => {
	return {
		type: "INCREMENTBY5",
		payload: num,
	};
};
