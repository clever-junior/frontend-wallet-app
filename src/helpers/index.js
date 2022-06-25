export default function setHandle({ name, value }, setState) {
  const { setInputValue, setInputCurrency,
    setInputDescription, setInputPaymentMethod, setInputTag } = setState;
  switch (name) {
  case 'setInputValue':
    return setInputValue(value);
  case 'setInputCurrency':
    return setInputCurrency(value);
  case 'setInputDescription':
    return setInputDescription(value);
  case 'setInputPaymentMethod':
    return setInputPaymentMethod(value);
  case 'setInputTag':
    return setInputTag(value);
  default:
    return 'error';
  }
}

export function createExpenses(id, keys, exchangeRates) {
  const { value, description, currency, method, tag } = keys;
  return {
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  };
}
