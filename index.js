// Use redux store
import { createStore } from './redux';

const store = createStore();
const state = store.getState();

// Redux reducer
// - func that accepts curr state & action
// - returns next state (state post action)
function countReducer(state = 0, action) {
    if (action.type === 'INCREMENT') return (state += 1);
    if (action.type === 'DECREMENT') return (state -= 1);
    // if action passed doesn't match
    return state;
}
