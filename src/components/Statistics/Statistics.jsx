import styled from 'styled-components';
import { StatListItem } from "./StatListItem/StatListItem";

const Section = styled.section`
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    text-align: center;
    background-color: #fff;
`

const Title = styled.h2`
    margin: 0;
    padding-top: 32px;
    margin-bottom: 32px;
    text-transform: uppercase;
    font-size: 21px;
    font-weight: 500;
    color: #565D62;
`

const List = styled.ul`
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
`

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title ? <Title>{title}</Title> : ''}
            {/* <Title>{title}</Title> */}
            <List>
                <StatListItem data={stats}/>
            </List>
        </Section>
    );
}