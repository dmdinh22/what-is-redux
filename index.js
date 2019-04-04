// ## REDUX ##
// core part of redux is the store
// Store has a single state tree
// - reads state
// - dispatch actions to update staet
// - subscribe & unsubscribe for updates to that state (watchers)
// Pass store to react-redux's <Provider /> with React app

// Implementation

// store - obj with methods on it
function createStore() {
    // create empty state obj on instantiation
    let state = {};

    // returning the store -> objg with getState func
    // - calling getState() grants access to state var
    //   inside createStore closure
    return {
        getState() {
            return state;
        }
    };
}
