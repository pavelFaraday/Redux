/* -------------------------------------------------------------------------- */
/*                               COMBINE REDUCER                               */
/* -------------------------------------------------------------------------- */

const redux = require("redux");
const createStore = redux.createStore;

// add dependency for combining reducers
const combineReducers = redux.combineReducers;

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

// initial states
const cakeInitialState = {
	numberOfCakes: 10,
};

const iceCreamInitialState = {
	numberOfIceCreams: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
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

const iceCreamReducer = (state = iceCreamInitialState, action) => {
	switch (action.type) {
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

// combine all reducers in root reducer
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

// pass reducer as created Store parameter
const store = createStore(rootReducer);

const currentState = () => {
	console.log("current State", store.getState());
};

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
current State { cake: { numberOfCakes: 10 }, iceCream: { numberOfIceCreams: 20 } }
Subscribe State Updates { cake: { numberOfCakes: 9 }, iceCream: { numberOfIceCreams: 20 } }
Subscribe State Updates { cake: { numberOfCakes: 8 }, iceCream: { numberOfIceCreams: 20 } }
Subscribe State Updates { cake: { numberOfCakes: 7 }, iceCream: { numberOfIceCreams: 20 } }
Subscribe State Updates { cake: { numberOfCakes: 7 }, iceCream: { numberOfIceCreams: 19 } }
Subscribe State Updates { cake: { numberOfCakes: 7 }, iceCream: { numberOfIceCreams: 18 } }
Subscribe State Updates { cake: { numberOfCakes: 7 }, iceCream: { numberOfIceCreams: 17 } }
current State { cake: { numberOfCakes: 7 }, iceCream: { numberOfIceCreams: 17 } }
*/

unsubscribe();
currentState();
