import { StatListItem } from "../StatListItem/StatListItem";

export const StatList = ({ data }) => {
    return(
        <ul>
            <StatListItem data/>
        </ul>
    );
}