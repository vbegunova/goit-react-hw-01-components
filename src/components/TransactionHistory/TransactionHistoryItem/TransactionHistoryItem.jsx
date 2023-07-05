import styled from 'styled-components';

const TableData = styled.td`
    text-transform: capitalize;
    font-size: 13px;
    color: #838588;
`

const TableRow = styled.tr`
    &:nth-child(2n) {
        background-color: #e3e8ec;
    }
`

export const TransactionHistoryItem = ({ data }) => {
    return data.map(item => {
        return (
            <TableRow>
                <TableData>{item.type}</TableData>
                <TableData>{item.amount}</TableData>
                <TableData>{item.currency}</TableData>
            </TableRow>
        )
    })
}