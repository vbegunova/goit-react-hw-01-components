import styled from 'styled-components';
import { ProfileStatsLi } from "components/Profile/ProfileStatsLi/ProfileStatsLi";

const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`

export const ProfileStats = ({ stats }) => {
    return(
        <List>
            <ProfileStatsLi type='Followers' data={stats.followers}/>
            <ProfileStatsLi type='Views' data={stats.views}/>
            <ProfileStatsLi type='Likes' data={stats.likes}/>
        </List>
    );
}