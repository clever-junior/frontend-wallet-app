import { failedRequest, setCurrencies, setExpenses } from '../actions';
import { createExpenses } from '../helpers';

export const apiRequest = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const result = await (await fetch(URL)).json();
  return result;
};

export default function getCurrencies() {
  return async (dispatch) => {
    try {
      dispatch(setCurrencies(Object.keys(await apiRequest())
        .filter((currency) => currency !== 'USDT')));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

export function getExpenses(id, keys, expenses) {
  return async (dispatch) => {
    try {
      dispatch(setExpenses(expenses
        .concat(await createExpenses(id, keys, await apiRequest()))));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
