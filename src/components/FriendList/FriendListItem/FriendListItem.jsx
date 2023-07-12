import PropTypes from 'prop-types';
import { Avatar, IsOffline, IsOnline, Item } from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
        return (<Item>
            {isOnline ? <IsOnline/> : <IsOffline/>}
            <Avatar src={avatar} alt="User avatar" style={{width: 48,}}/>
            <p>{name}</p>
        </Item>)
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}