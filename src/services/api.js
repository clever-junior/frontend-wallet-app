import { failedRequest, requestCurrencies, setCurrencies } from '../actions';

export default function getCurrencies() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch(URL)
      .then((response) => response.json())
      .then((json) => dispatch(setCurrencies(Object.keys(json)
        .filter((currency) => currency !== 'USDT'))))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
