import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE': 
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE': 
      return state.filter(({ id }) => id !== action.id);
    default: 
      return state;
  }
};


const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', 
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER': 
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT': 
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE': 
      return {
        ...state,
        sortBy: 'date'
      };
    default: return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const rentExpense = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const coffeeExpense = store.dispatch(addExpense({ description: 'Coffee', amount: 50 }));

store.dispatch(removeExpense({ id: rentExpense.expense.id }));
store.dispatch(setTextFilter('holi'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
  expenses: [{
    id: 'ABCDEF',
    description: 'January Rent', 
    note: 'Fuck the popo', 
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent', 
    sortBy: 'amount',  // date or amount
    startDate: undefined,
    endDate: undefined
  }
};