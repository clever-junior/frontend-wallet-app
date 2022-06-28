import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCurrencies from '../services/api';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

function Wallet({ dispatch, expenses }) {
  const [totalExpensesValue, setTotalExpensesvalue] = useState(0);

  useEffect(() => {
    dispatch(getCurrencies());
    const updateExpenseValue = () => {
      const sum = [];
      expenses.forEach((expensy) => {
        sum.push(expensy.value * expensy.exchangeRates[expensy.currency].ask);
      });
      if (sum.length > 0) {
        const total = sum.reduce((prev, current) => prev + current);
        setTotalExpensesvalue(total);
      }
    };
    updateExpenseValue();
  }, [dispatch, expenses]);

  return (
    <div>
      <Header value={ totalExpensesValue } />
      <WalletForm />
      <WalletTable />
    </div>);
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ).isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
