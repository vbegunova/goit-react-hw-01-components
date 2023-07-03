import styled from 'styled-components';
import { ProfileInfo } from 'components/Profile/ProfileInfo/ProfileInfo';
import { ProfileStats } from 'components/Profile/ProfileStats/ProfileStats';

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #E4E9F0;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 1px 10px 2px rgba(1, 1, 1, 0.1);
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <Container>
            <ProfileInfo name={name} tag={tag} location={location} avatar={avatar}/>
            <ProfileStats stats={stats}/>
        </Container>
    );
}