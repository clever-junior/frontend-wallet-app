import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCurrencies from '../services/api';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  state = {
    totalExpensesValue: 0,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  updateExpenseValue = (currentValue) => {
    this.setState((prevState) => ({
      totalExpensesValue: prevState.totalExpensesValue + currentValue,
    }));
  }

  render() {
    const { totalExpensesValue } = this.state;
    return (
      <div>
        <Header value={ totalExpensesValue } />
        <WalletForm updateValue={ this.updateExpenseValue } />
      </div>);
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
