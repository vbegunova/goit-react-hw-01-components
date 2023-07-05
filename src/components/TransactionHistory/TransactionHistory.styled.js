import styled from 'styled-components';

export const Table = styled.table`
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

export const TableHeader = styled.th`
    text-transform: uppercase;
    font-size: 12px;
    background-color: #00BCD5;
    color: #FFF;
`