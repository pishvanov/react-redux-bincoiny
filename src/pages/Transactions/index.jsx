import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import Error from '../../components/Error';
import '../pages.css';

function Transactions() {
  const { transactionsReducer: { sortedTransactions } } = useSelector((state) => state);
  return (
    <div className="wrap">
      { sortedTransactions
        && <Table rows={sortedTransactions} />}
      { !sortedTransactions
        && <Error /> }
    </div>
  );
}

export default Transactions;
