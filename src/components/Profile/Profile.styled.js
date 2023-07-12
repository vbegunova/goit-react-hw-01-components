import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #E4E9F0;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 1px 10px 2px rgba(1, 1, 1, 0.1);
    margin-top: 20px;
    margin-bottom: 40px;
`

export const Info = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    h3, p {
        margin-top: 0;
        margin-bottom: 10px;
        color: #212F41;
    }
    h3 {
        font-size: 18px;
    }
    p {
        font-size: 14px;
        color: #ABB4BE;
    }
    p:last-child {
        margin-bottom: 0;
    }
`

export const Avatar = styled.img`
    margin-bottom: 20px;
    width: 100px;
    border-radius: 50%;
`

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`

export const Item = styled.li`
    padding-top: 20px;
    padding-bottom: 20px;
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #E4E9F0;
    border-bottom: none;
    &:last-child {
        border-right: none;
        border-bottom-right-radius: 5px;
    }
    &:first-child {
        border-left: none;
        border-bottom-left-radius: 5px;
    }
    background-color: #F3F6F9;
    span {
        margin-top: 0;
    }
`

export const StatName = styled.span`
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 500;
    color: #7D8D9C;
`

export const StatData = styled.span`
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 700;
    color: #20344A;
`