import { Item, StatData, StatName } from "./ProfileStatsLi.styled";

export const ProfileStatsLi = ({ type, data}) => {
    return(
        <Item>
            <StatName>{type}</StatName>
            <StatData>{data}</StatData>
        </Item>
    );
}