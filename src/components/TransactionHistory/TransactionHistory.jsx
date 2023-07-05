import styled from 'styled-components';
import { TransactionHistoryItem } from "./TransactionHistoryItem/TransactionHistoryItem";

const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    width: 750px;
    border-collapse: collapse;
    th, td {
        padding: 14px;
        text-align: center;
    }
    th:not(:last-child) {
        border-right: 1px solid #ffffff;
    }
    td {
        border: 1px solid #E0E6E8;
    }
`

const TableHeader = styled.th`
    text-transform: uppercase;
    font-size: 12px;
    background-color: #00BCD5;
    color: #FFF;
`

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