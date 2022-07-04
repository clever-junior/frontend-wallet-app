import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ email, value }) {
  const currency = 'BRL';
  String(value).toLocaleString('pt-BR', { style: 'currency', currency });
  return (
    <div>
      <p data-testid="email-field">
        Email:
        {' '}
        { email }
      </p>
      <p data-testid="total-field">
        { +value.toFixed(2) }
      </p>
      <p data-testid="header-currency-field">
        { currency }
      </p>
    </div>
  );
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
