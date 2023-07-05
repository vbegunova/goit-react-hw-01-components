import styled from 'styled-components';

export const Container = styled.div`
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
