import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy5 } from "./actions/allActions";

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Counter {counter}</h1>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(incrementBy5(5))}>+ 5</button>

			{isLogged ? (
				<h3>You are logged in & see your personal information </h3>
			) : (
				""
			)}
		</div>
	);
}

export default App;
