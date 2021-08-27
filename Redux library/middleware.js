/* -------------------------------------------------------------------------- */
/*                      MIDDLEWARE - redux-logger                             */
/* -------------------------------------------------------------------------- */

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// 1) create logger method:
const reduxLogger = require("redux-logger");

// 2) apply middleware
const applyMiddleware = redux.applyMiddleware;

// 3) create new logger:
const logger = reduxLogger.createLogger();

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

// 4) pass applyMiddleware(logger) as second parameter in the store
const store = createStore(rootReducer, applyMiddleware(logger));

const currentState = () => {
	console.log("current State", store.getState());
};

const unsubscribe = store.subscribe(() => {});

currentState();

// dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
currentState();
