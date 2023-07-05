import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding-top: 11px;
    padding-bottom: 14px;
    span {
        color: #FFF;
    }
    span:first-child {
        font-size: 15px;
        margin-bottom: 10px;
    }
    span:last-child {
        font-size: 24px;
    }
`