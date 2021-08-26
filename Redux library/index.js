// 1)  add pure Redux from Node Package ||| NOT for REACT!
const redux = require("redux");

// 2) create store
const createStore = redux.createStore;

/* -------------------------------------------------------------------------- */
/*                                 3) Action                                  */
/* -------------------------------------------------------------------------- */

const BUY_CAKE = "BUY_CAKE";

// action creator
const actionCreator = () => {
	return {
		type: BUY_CAKE,
	};
};

/* -------------------------------------------------------------------------- */
/*                                4) Reducer                                  */
/* -------------------------------------------------------------------------- */

// initial state
const initialState = {
	numberOfCakes: 10,
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - 1,
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

currentState(); // current State { numberOfCakes: 10 }

// dispatch
store.dispatch(actionCreator());
store.dispatch(actionCreator());
store.dispatch(actionCreator());

unsubscribe();
/* 
Subscribe State Updates { numberOfCakes: 9 }
Subscribe State Updates { numberOfCakes: 8 }
Subscribe State Updates { numberOfCakes: 7 }
*/

currentState(); // current State { numberOfCakes: 7 }
