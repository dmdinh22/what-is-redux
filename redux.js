// ## REDUX ##
// core part of redux is the store
// Store has a single state tree
// - reads state
// - dispatch actions to update staet
// - subscribe & unsubscribe for updates to that state (watchers)
// Pass store to react-redux's <Provider /> with React app

// Implementation

// store - obj with methods on it
//                                  pass initialState with default empty obj
function createStore(initialReducer, initialState = {}) {
    let reducer = initialReducer;
    let subscribers = [];
    // create empty state obj on instantiation
    let state = reducer(initialState, { type: 'INIT' });

    // returning the store -> objg with getState func
    // - calling getState() grants access to state var
    //   inside createStore closure
    return {
        getState() {
            return state;
        },
        // let user notify that something happened
        // dispatching the action -> calling reducer with current state and action we passed
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(listener) {
            subscribers.push(listener);
            // unsubscriber fn returned every time a subscribe is called to allow unsubscription
            return () => {
                subscribers = subscribers.filter(
                    subscriber => subscriber !== listener
                );
            };
        }
    };
}
