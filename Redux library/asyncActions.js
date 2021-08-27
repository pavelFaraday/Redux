// create redux store
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// add 'redux-thunk'
const thunkMiddleware = require("redux-thunk").default;
// add 'axios'
const axios = require("axios");

/* -------------------------------------------------------------------------- */

// set initial state
const initialState = {
	loading: false,
	users: [],
	error: "",
};

// set actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

/* -------------------------------------------------------------------------- */

// fetch users
const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				// response.data is the users
				const users = response.data.map((user) => user.id);
				dispatch(fetchUsersSuccess(users));
			})
			.catch((error) => {
				// error.message is the error message
				dispatch(fetchUsersFailure(error.message));
			});
	};
};

/* -------------------------------------------------------------------------- */

// set reducers:
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USERS_FAILURE:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};
		default:
	}
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
	console.log(store.getState());
});
store.dispatch(fetchUsers());
