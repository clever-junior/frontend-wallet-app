import { LOGIN, SHOW_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, value }) => {
  switch (type) {
  case LOGIN:
    return value;
  case SHOW_EMAIL:
    return value;
  default:
    return state;
  }
};

export default user;
