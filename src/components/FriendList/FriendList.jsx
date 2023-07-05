import styled from 'styled-components';
import { FriendListItem } from "./FriendListItem/FriendListItem";

const List = styled.ul`
    width: 200px;
    padding: 0;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;
`

export const FriendList = ({friends}) => {
    return (
        <List>
            <FriendListItem data={friends}/>
        </List>
    );
}