import React from "react";
import CakeContainer from "./components/CakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CakeContainer />
				<NewCakeContainer />
			</div>
		</Provider>
	);
}

export default App;
