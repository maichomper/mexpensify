import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{amount}-{createdAt}</p>
  </div>
);

const mapPropsToState = (state) => {
  return {
    expense: state.expenses
  }
}
export default ExpenseListItem;
