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

1. create globalized state:
   `import { createStore } from "redux";`

2. State takes REDUCER:
   `let store = createStore(reducer);`
