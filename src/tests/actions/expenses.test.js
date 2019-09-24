import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action object', () => {
  const action = removeExpense({id: '123'});
  expect(action).toEqual({
    id: '123',
    type: 'REMOVE_EXPENSE'
  });
})

test('should setup editExpense action object', () => {
  const action = editExpense('123', { note: 'New note value' });

  expect(action).toEqual({
    id: '123',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'New note value'
    }
  });
})

test ('should setup addExpense action with passed values', () => {
  const expenseData = {
    description: 'Description',
    note: 'Note',
    amount: 1000,
    createdAt: 123456
  }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test ('should setup addExpense action with default values', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      amount: 0,
      createdAt: 0,
      description: '',
      note: ''
    }
  });
});