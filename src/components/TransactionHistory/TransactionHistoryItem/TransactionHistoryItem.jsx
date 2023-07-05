import { TableData, TableRow } from "./TransactionHistoryItem.styled"

export const TransactionHistoryItem = ({ data }) => {
    return data.map(item => {
        return (
            <TableRow key={item.id}>
                <TableData>{item.type}</TableData>
                <TableData>{item.amount}</TableData>
                <TableData>{item.currency}</TableData>
            </TableRow>
        )
    })
}