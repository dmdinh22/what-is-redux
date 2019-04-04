// Use redux store
import { createStore } from './redux';

const state = store.getState();
// Data flow of Redux
/*
  1. User dispatches action
  2. Action passed to the reducer
  3. Reducer returns new state
  4. State is updated in the store
  5. Anyone interested in new state is notified (broadcast)
*/

// Redux reducer
// - func that accepts curr state & action
// - returns next state (state post action)
function countReducer(state = 0, action) {
    if (action.type === 'INCREMENT') return (state += 1);
    if (action.type === 'DECREMENT') return (state -= 1);
    // if action passed doesn't match
    return state;
}

const store = createStore(countReducer);
store.subscribe(() => console.log('The state changed!', store.getState()));
