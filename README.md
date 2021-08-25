# Redux Lessons &amp; Tutorials

1. Install Redux with npm:

    `npm install redux react-redux`

### Store:

A globalized state, that holds all the data or state for our application and you can access this state anywhere separatilly - in each component of application.

      let store = createStore(reducerName);

### Action:

It is just name, that describes an action you want to do. It is just function, that returns an object:

      const increment = () => {
         return {
            type: "INCREMENT",
         };
      };
      const decrement = () => {
         return {
            type: "DECREMENT",
         };
      };

### Reducer:

It describes how your action transforms state into the next state. Reducer checks which ACTION you did and based on that action modifies STORE. It is a function, that has 2 parametres:

1.  Initial State
2.  action

         const counter = (state = 0, action) => {
            switch (action.type) {
               case "INCREMENT":
                  return state + 1;
               case "DECREMENT":
                  return state - 1;
            }
         };

### Dispatch:

This is the way where we can execute this Action.

      store.dispatch(increment());
      store.dispatch(decrement());
      store.dispatch(decrement());

> By **DISPATCH** We send **ACTION** to the **REDUCER** -> **REDUCER** checks what to do -> then **STORE** gets updated.

---

## STEPS:

1.  create globalized state:
    `import { createStore } from "redux";`

2.  State takes REDUCER:
    `let store = createStore(reducer);`

3.  For combinening many reducers:
    `import { combineReducers } from "redux";`

    You create file 'allReducers.js' that holds code and import it in 'index.js':

          import counterReducer from "./counter";
          import loggedReducer from "./isLogged";
          import { combineReducers } from "redux";

          const allReducers = combineReducers({
             counter: counterReducer,
             isLogged: loggedReducer,
          });

4.  For **Redux DevTools** Chrome Extension add this code to store as second parameter:
    `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

>         const store = createStore(
>            allReducers,
>            window.**REDUX_DEVTOOLS_EXTENSION** && window **REDUX_DEVTOOLS_EXTENSION**()
>         );

5.  for connection of global store to hole app (in 'index.js'):

##### step 1:

    `import { Provider } from "react-redux";`

##### step 2:

          ReactDOM.render(
                <Provider store={store}>
                   <App />
                </Provider>,
             document.getElementById("root")
          );

6. For Selecting store states:

##### step 1:

`import { useSelector} from "react-redux";`

##### step 2:

      const counter = useSelector((state) => state.counter);
      const isLogged = useSelector((state) => state.isLogged);

7. For dispatching actions:

##### step 1:

'import { useDispatch } from "react-redux";'

##### step 2:

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementBy5(5))}>+ 5</button>

8.  What is **'payload'** ?

**App.js**

      <button onClick={() => dispatch(incrementBy5(5))}>+ 5</button>

**allActions.js**

      export const incrementBy5 = (num) => {
         return {
            type: "INCREMENTBY5",
            payload: num,
         };
      };


**counter.js**

      const counterReducer = (state = 0, action) => {
         switch (action.type) {
            case "INCREMENTBY5":
               return state + action.payload;
            default:
               return state;
         }
      };
