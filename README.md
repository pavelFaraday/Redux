# Redux Lessons &amp; Tutorials

**What is Redux?**
Redux is a state managment library for javaScript apps. It is a predictable state container.

-   Redux stores the state of application - It is a container of all states of application.
-   In Redux state of an app is a state represented by all individual components of that app.

**What is doing Redux?**

-   Redux centralizes application's state
-   Makes data flow transparent & predictable
    -   In Redux all state transitions are explicit and and it is possible to keep track of them
-   Easy debugging
-   Preserve page state
-   Undo/Redu

**When not to use Redux?**

-   Tight Budget
-   Small to medium-size apps
-   Simple UI/Data flow
-   Static Data

---

## Main Principles:

1. **_The state of your hole application is stored in an object tree within a single store._**
   Maintain our application state in an single object which would be managed by the Redux store.

2. **_The only way to change the state is to emit the action, an object describing what happened._**
   To update the state of your app, you need to let Redux know about that with an action.

3. **_To specify how the state tree is transformed by actions, you wright reducers._**
   `Reducers = (previousState, action) => newState`

---

## Main Concepts:

-   ### Store:

A globalized state, that holds all the data or state for our application and you can access this state anywhere separatilly - in each component of application.

      let store = createStore(reducerName);

##### getState()

_getState()_ - method, that gives us app access to the state it currently holds / It gives current state.

##### subscribe(listener)

Register listeners to the subscribe() method.
`subscribe()` method accepts a function as a parameter, which is executed any time the state in the Redux Store changes.

-   ### Action:

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

##### Action Creators:

_action creator_ - it simply creates an action. It is an function that returns an action.

      const BUY_CAKE = "BUY_CAKE";

      const actionCreator = () => {
         return {
            type: BUY_CAKE,
         };
      };

-   ### Reducer:

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

##### Combine Reducers:

1.  add dependency for combining reducers:
    `const combineReducers = redux.combineReducers;`

2.  combine all reducers in root reducer:

         const rootReducer = combineReducers({
            cake: cakeReducer,
            iceCream: iceCreamReducer,
         });

3.  pass root reducer as created Store parameter
    `const store = createStore(rootReducer);`

-   ### Dispatch:

This is the way where we can execute this Action.

dispatch method accepts **_action as parameter_** !

      store.dispatch(increment());
      store.dispatch(decrement());
      store.dispatch(decrement());

> By **DISPATCH** We send **ACTION** to the **REDUCER** -> **REDUCER** checks what to do -> then **STORE** gets updated.

-   ### Middleware:

**Middleware** is a suggested way to extend Redux with custom functionality. This gives us extra features of Redux.

It provides a third-party extension point between despatching an action, and the moment it reaches the reducer.

> despatch() ----> **Middleware Info** ----> Reducer

Use Middleware for _logging_, _crash reporting_, _performing asynchronous tasks_ etc..

You can create as many loggers as you want !

-   1. install **redux logger** packgage with npm:
       `npm install redux-logger`
-   2. create logger method provided by the library:
       `const reduxLogger = require('redux-logger')`
-   3. include middleware :
       `const applyMiddleware = redux.applyMiddleware;`
-   4. create new logger:
       `const logger = reduxLogger.createLogger();`
-   5. pass applyMiddleware(logger) as second parameter in the store
       `const store = createStore(rootReducer, applyMiddleware(logger));`

-   ### Axios & redux-thunk

-   install **Axios & redux-thunk**
    `npm install axios redux-thunk`

-   add **axios**
    `const axios = require("axios");`

-   add **redux-thunk**
    `const thunkMiddleware = require("redux-thunk").default;`

---

## Pure Redux Library

-   **Step 1:** initialize 'package.json' file with the default settings:
    `npm init --yes`
-   **Step 2:** add Redux as a dependency for app:
    `npm install redux`
-   **Step 3:** add Redux with Node.js to Pure JavaScript file. NOT for REACT !
    `const redux = require("redux");`

---

# React-Redux

## STEPS:

1.  Install React-Redux library with npm:

-   react-redux is the official Redux UI binding library for React.

    `npm install redux react-redux`

2.  create globalized state:
    `import { createStore } from "redux";`

3.  State takes REDUCER as parameter:
    `let store = createStore(reducer);`

4.  For combinening many reducers:
    `import { combineReducers } from "redux";`

    You create file 'allReducers.js' that holds code and import it in 'index.js':

          import counterReducer from "./counter";
          import loggedReducer from "./isLogged";
          import { combineReducers } from "redux";

          const allReducers = combineReducers({
             counter: counterReducer,
             isLogged: loggedReducer,
          });

5.  For **Redux DevTools** Chrome Extension add this code to store as second parameter:
    `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

>         const store = createStore(
>            allReducers,
>            window.**REDUX_DEVTOOLS_EXTENSION** && window **REDUX_DEVTOOLS_EXTENSION**()
>         );

6.  for connection of global store to hole app (in 'index.js'):

##### step 1:

    `import { Provider } from "react-redux";`

##### step 2:

          ReactDOM.render(
                <Provider store={store}>
                   <App />
                </Provider>,
             document.getElementById("root")
          );

7. For Selecting store states:

##### step 1:

`import { useSelector} from "react-redux";`

##### step 2:

      const counter = useSelector((state) => state.counter);
      const isLogged = useSelector((state) => state.isLogged);

8. For dispatching actions:

##### step 1:

'import { useDispatch } from "react-redux";'

##### step 2:

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementBy5(5))}>+ 5</button>

9.  What is **'payload'** ?

payload is an object, that contains all the data about an ACTION.

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
