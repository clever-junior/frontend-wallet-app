import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDisabled: true,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      if (this.validateEmailAndPassword()) {
        this.setState({ isButtonDisabled: false });
      } else {
        this.setState({ isButtonDisabled: true });
      }
    });
  }

  validateEmailAndPassword = () => {
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    const charLimit = 6;
    return !!(re.test(email) && password.length >= charLimit);
  }

  render() {
    const { getEmail } = this.props;
    const { isButtonDisabled, email } = this.state;
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />

        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />

        </label>
        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ () => getEmail({ email }) }
        >
          <Link to="/carteira" disabled={ isButtonDisabled }>
            Entrar
          </Link>
        </button>
      </form>);
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({ email: state });

const mapDispatchToProps = (dispatch) => ({
  getEmail: (value) => dispatch(login(value)),
});

export default connect(null, mapDispatchToProps)(Login);
