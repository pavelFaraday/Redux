import React from "react";
import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
	return (
		<div>
			<h3>Number of Cakes - {props.numOfCakes}</h3>
			<button onClick={props.buy_cake}>Buy Cake</button>
		</div>
	);
}

// mapStateToProps
const mapStateToProps = (state) => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		buy_cake: () => dispatch(buy_cake()),
	};
};

// connect mapStatetOProps & mapDispatchtOProps to Component:
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
