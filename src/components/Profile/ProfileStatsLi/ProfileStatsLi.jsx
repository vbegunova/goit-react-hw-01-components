import styled from 'styled-components';

const Item = styled.li`
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

const StatName = styled.span`
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 500;
    color: #7D8D9C;
`

const StatData = styled.span`
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 700;
    color: #20344A;
`

export const ProfileStatsLi = ({ type, data}) => {
    return(
        <Item>
            <StatName>{type}</StatName>
            <StatData>{data}</StatData>
        </Item>
    );
}