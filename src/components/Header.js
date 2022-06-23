import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ email }) {
  const totalExpense = 0;
  const currency = 'BRL';
  String(totalExpense).toLocaleString('pt-BR', { style: 'currency', currency });
  return (
    <div>
      <p data-testid="email-field">
        Email:
        {' '}
        { email }
      </p>
      <p data-testid="total-field">
        Despesa Total:
        {' '}
        { totalExpense }
      </p>
      <p data-testid="header-currency-field">
        { currency }
      </p>
    </div>
  );
}

Header.propTypes = { email: PropTypes.string.isRequired };

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
