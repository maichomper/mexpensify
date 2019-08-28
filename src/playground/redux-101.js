import { createStore } from 'redux';

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state of action!

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default: return state;
  }
  
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(incrementCount({ incrementBy: 50 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(incrementCount());

store.dispatch(incrementCount());
