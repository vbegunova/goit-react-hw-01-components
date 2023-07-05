import PropTypes from 'prop-types';
import { List } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <List>
            <FriendListItem data={friends}/>
        </List>
    );
}

FriendListItem.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };