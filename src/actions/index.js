// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const SHOW_EMAIL = 'SHOW_EMAIL';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const SET_CURRENCIES = 'CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';
export const DELETE_TASK = 'DELETE_TASK';

export const login = (value) => ({ type: LOGIN, value });

export const showEmail = (value) => ({ type: SHOW_EMAIL, value });

export const setCurrencies = (value) => ({ type: SET_CURRENCIES, value });

export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

export const setExpenses = (value) => ({ type: SET_EXPENSES, value });

export const deleteExpense = (value) => ({ type: DELETE_TASK, value });
