import { React, useState } from "react";
import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
	const [number, setNumber] = useState(1);

	return (
		<div>
			<h3>Number of Cakes - {props.numOfCakes}</h3>
			<input
				type="text"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => props.buy_cake(number)}>
				Buy {number} Cake
			</button>
		</div>
	);
}

// mapStateToProps:
const mapStateToProps = (state) => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		buy_cake: (number) => dispatch(buy_cake(number)),
	};
};

// connect mapStatetOProps & mapDispatchtOProps to Component:
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
