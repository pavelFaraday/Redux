/* -------------------------------------------------------------------------- */
/*                               SINGLE REDUCER                               */
/* -------------------------------------------------------------------------- */

// 1)  add pure Redux from Node Package ||| NOT for REACT!
const redux = require("redux");

// 2) create store
const createStore = redux.createStore;

/* -------------------------------------------------------------------------- */
/*                                 3) Action                                  */
/* -------------------------------------------------------------------------- */

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creator
const buyCake = () => {
	return {
		type: BUY_CAKE,
	};
};

const buyIceCream = () => {
	return {
		type: BUY_ICECREAM,
	};
};

/* -------------------------------------------------------------------------- */
/*                                4) Reducer                                  */
/* -------------------------------------------------------------------------- */

// initial state
const initialState = {
	numberOfCakes: 10,
	numberOfIceCreams: 20,
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - 1,
			};
		case BUY_ICECREAM:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams - 1,
			};
		default:
			return state;
	}
};

/* -------------------------------------------------------------------------- */

// 5) pass reducer as created Store parameter
const store = createStore(myReducer);

// getState() - get current State
const currentState = () => {
	console.log("current State", store.getState());
};

// subscribe() - subscribe to changes in the store
// any time the store updates we log the state in the console
const unsubscribe = store.subscribe(() => {
	console.log("Subscribe State Updates", store.getState());
});

currentState();

// dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

/* 
current State { numberOfCakes: 10, numberOfIceCreams: 20 }
Subscribe State Updates { numberOfCakes: 9, numberOfIceCreams: 20 }
Subscribe State Updates { numberOfCakes: 8, numberOfIceCreams: 20 }
Subscribe State Updates { numberOfCakes: 7, numberOfIceCreams: 20 }
Subscribe State Updates { numberOfCakes: 7, numberOfIceCreams: 19 }
Subscribe State Updates { numberOfCakes: 7, numberOfIceCreams: 18 }
Subscribe State Updates { numberOfCakes: 7, numberOfIceCreams: 17 }
current State { numberOfCakes: 7, numberOfIceCreams: 17 }
*/

unsubscribe();
currentState();
