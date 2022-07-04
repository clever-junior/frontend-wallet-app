import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

function WalletTable({ expenses, dispatch }) {
  const titles = ['Descrição', 'Tag', 'Método de pagamento',
    'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
    'Moeda de conversão', 'Editar/Excluir'];

  const validation = (currency, element) => {
    if (currency === 'USD') {
      return 'Dólar Comercial';
    }
    if (currency === 'EUR') {
      return 'Euro';
    }
    return (
      element.exchangeRates[element.currency].name
        .slice(0, element.exchangeRates[element.currency].name.indexOf('/'))
    );
  };

  const onDeleteBtnClick = (id) => dispatch(deleteExpense(id));

  return (
    <table>
      <thead>
        <tr>
          {
            titles.map((title, index) => (
              <th key={ `title=${index}` }>
                {title}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          expenses?.map((element) => (
            <tr key={ element.id }>
              <td>
                {element.description}
              </td>
              <td>
                {element.tag}
              </td>
              <td>
                { element.method }
              </td>
              <td>
                { (+element.value).toFixed(2) }
              </td>
              <td>
                { validation(element.currency, element) }
              </td>
              <td>
                { (+element.exchangeRates[element.currency].ask).toFixed(2) }
              </td>
              <td>
                { (+element.value * element.exchangeRates[element.currency].ask)
                  .toFixed(2) }
              </td>
              <td>
                Real
              </td>
              <td>
                <button type="button">
                  Editar
                </button>

                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => onDeleteBtnClick(element.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ).isRequired,
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
