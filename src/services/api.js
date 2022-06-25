import { failedRequest, requestCurrencies, setCurrencies, setExpenses } from '../actions';
import { createExpenses } from '../helpers';

export const apiRequest = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const result = await (await fetch(URL)).json();
  return result;
};

export default function getCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    try {
      dispatch(setCurrencies(Object.keys(await apiRequest())
        .filter((currency) => currency !== 'USDT')));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

export async function getExchangeRates() {
  const result = await apiRequest();
  const keys = Object.keys(result).filter((currency) => currency !== 'USDT');
  const exchangeRates = {};
  keys.forEach((currency) => {
    exchangeRates[currency] = {
      ask: result[currency].ask, name: result[currency].name, code: currency,
    };
  });
  return exchangeRates;
}

export function getExpenses(id, keys, expenses) {
  return async (dispatch) => {
    try {
      dispatch(setExpenses(expenses
        .concat(await createExpenses(id, keys, await getExchangeRates()))));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
