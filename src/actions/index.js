// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const SHOW_EMAIL = 'SHOW_EMAIL';

export const login = (value) => ({ type: LOGIN, value });

export const showEmail = (value) => ({ type: SHOW_EMAIL, value });
