import { ProfileStatsLi } from "components/Profile/ProfileStatsLi/ProfileStatsLi";
import { List } from "./ProfileStats.styled";

export const ProfileStats = ({ stats }) => {
    return(
        <List>
            <ProfileStatsLi type='Followers' data={stats.followers}/>
            <ProfileStatsLi type='Views' data={stats.views}/>
            <ProfileStatsLi type='Likes' data={stats.likes}/>
        </List>
    );
}