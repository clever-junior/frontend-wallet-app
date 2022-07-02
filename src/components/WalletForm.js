import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import setHandle from '../helpers/index';
import { getExpenses } from '../services/api';

function WalletForm({ currencies, dispatch, expenses }) {
  const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const [inputValue, setInputValue] = useState(0);
  const [inputCurrency, setInputCurrency] = useState('USD');
  const [inputPaymentMethod, setInputPaymentMethod] = useState('Dinheiro');
  const [inputTag, setInputTag] = useState(tag[0]);
  const [inputDescription, setInputDescription] = useState('');
  const [id, setId] = useState(0);
  const setState = {
    setInputValue,
    setInputCurrency,
    setInputPaymentMethod,
    setInputTag,
    setInputDescription,
    // setCurrentExpense,
  };

  const stateValues = {
    value: inputValue,
    description: inputDescription,
    currency: inputCurrency,
    method: inputPaymentMethod,
    tag: inputTag,
  };

  const handleChange = ({ target }) => {
    setHandle(target, setState);
  };

  const resset = () => {
    setInputValue(0);
    setInputCurrency('USD');
    setInputDescription('');
    setInputPaymentMethod('Dinheiro');
    setInputTag('Alimentação');
  };

  const onAddButtonClick = () => {
    setId(id + 1);
    dispatch(getExpenses(id, stateValues, expenses));
    resset();
  };

  return (
    <form>
      <label htmlFor="expenseValue">
        Valor:
        <input
          type="number"
          id="value"
          value={ inputValue }
          data-testid="value-input"
          name="setInputValue"
          onChange={ handleChange }
        />
      </label>
      <Select
        id="currencies"
        testId=""
        title="Moeda: "
        array={ currencies }
        name="setInputCurrency"
        value={ inputCurrency }
        handleChange={ handleChange }
      />
      <Select
        id="paymentMethods"
        testId="method-input"
        title="Métodos de pagamento: "
        array={ paymentMethods }
        name="setInputPaymentMethod"
        value={ inputPaymentMethod }
        handleChange={ handleChange }
      />
      <Select
        id="tag"
        testId="tag-input"
        title="Tag: "
        array={ tag }
        name="setInputTag"
        value={ inputTag }
        handleChange={ handleChange }
      />
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          data-testid="description-input"
          name="setInputDescription"
          value={ inputDescription }
          onChange={ handleChange }
        />
        <button type="button" onClick={ onAddButtonClick }>
          Adicionar despesa
        </button>
      </label>
    </form>
  );
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ).isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
