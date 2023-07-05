import PropTypes from 'prop-types';
import { TransactionHistoryItem } from "./TransactionHistoryItem/TransactionHistoryItem";
import { Table, TableHeader } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return(
        <Table>
            <thead>
                <tr>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </tr>
            </thead>
            <tbody>
                <TransactionHistoryItem data={items}/>
            </tbody>
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
}