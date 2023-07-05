import styled from 'styled-components';

export const IsOnline = styled.span`
    background-color: #50AE51;
`

export const IsOffline = styled.span`
    background-color: #F85650;
`

export const Item = styled.li`
    display: flex;
    gap: 7px;
    width: 100%;
    padding: 4px;
    padding-left: 7px;
    align-items: center;
    background-color: #FFF;
    box-shadow: 1px 1px 1px 1px rgba(1, 1, 1, 0.1);
    p {
        font-size: 16px;
    }
    span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

export const Avatar = styled.img`
    border-radius: 3px;
`

