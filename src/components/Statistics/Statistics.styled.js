import styled from 'styled-components';

export const Section = styled.section`
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    text-align: center;
    background-color: #fff;
`

export const Title = styled.h2`
    margin: 0;
    padding-top: 32px;
    margin-bottom: 32px;
    text-transform: uppercase;
    font-size: 21px;
    font-weight: 500;
    color: #565D62;
`

export const List = styled.ul`
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
`

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
