import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function WalletTable({ expenses }) {
  const titles = ['Descrição', 'Tag', 'Método de pagamento',
    'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
    'Moeda de conversão', 'Editar/Excluir'];
  return (
    <table>
      <tr>
        {
          titles.map((title, index) => (
            <th key={ index }>
              {title}
              {console.log(expenses)}
            </th>
          ))
        }
      </tr>
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
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
