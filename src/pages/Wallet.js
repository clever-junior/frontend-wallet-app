import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCurrencies from '../services/api';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  render() {
    return <div><Header /></div>;
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
