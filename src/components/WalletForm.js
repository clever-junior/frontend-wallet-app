import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

export default function WalletForm({ currencies }) {
  const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  return (
    <form>
      <label htmlFor="expenseValue">
        Valor:
        <input
          type="number"
          id="expenseValue"
          data-testid="value-input"
          name="expenseValue"
        />
      </label>
      <Select
        id="currencies"
        testId=""
        title="Moeda: "
        array={ currencies }
        name="currencies"
      />
      <Select
        id="paymentMethods"
        testId="method-input"
        title="Métodos de pagamento: "
        array={ paymentMethods }
        name="paymentMethods"
      />
      <Select
        id="tag"
        testId="tag-input"
        title="Tag: "
        array={ tag }
        name="tag"
      />
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          data-testid="description-input"
          name="description"
        />
      </label>
    </form>
  );
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
